import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import ReactQuill from 'react-quill';
import TextField from '@mui/material/TextField';
import { Textarea } from '@mui/joy';
import { useFormik } from 'formik';
import { useGlobalContext } from 'global/context';

export default function EditQuestion({ open, setOpen, title, description, id, updateQuestion }) {
    const [value, setValue] = React.useState(description);
    const { userData, api, apiAuth } = useGlobalContext();
    const formik = useFormik({
        initialValues: {
            title: title,
        },
        onSubmit: async (values, action) => {
            values = { ...values, email: userData?.email, body: value };
            console.log("Edit Values: ", values);
            try {
                const res = await api.put(`/app/question/${id}`, values);
                if (res?.status === 200) {
                    console.log("Edit Res: ", res);
                    setOpen(false);
                    updateQuestion();
                }
            } catch (err) {
                console.log(err);
                setOpen(false);
            }
        }
    });
    return (
        <React.Fragment>

            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={open}
                className={"DESINED"}
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: 800,
                        width: "100%",
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        maxHeight: "98vh",
                    }}
                >
                    <ModalClose
                        variant="outlined"
                        sx={{
                            top: 'calc(-1/4 * var(--IconButton-size))',
                            right: 'calc(-1/4 * var(--IconButton-size))',
                            boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
                            borderRadius: '50%',
                            bgcolor: 'background.body',
                        }}
                    />
                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Edit your question
                    </Typography>
                    {/* <Typography id="modal-desc" textColor="text.tertiary">
                                Make sure to use <code>aria-labelledby</code> on the modal dialog with an
                                optional <code>aria-describedby</code> attribute.
                            </Typography> */}
                    <Typography id="modal-desc" textColor="text.tertiary">
                        Title
                    </Typography>
                    <TextField
                        multiline
                        rows={1}
                        margin="dense"
                        id="title"
                        name='title'
                        type="text"
                        placeholder='Ex- What is yuvamanthan? Can I participate?'
                        fullWidth
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    <Typography id="modal-desc" textColor="text.tertiary" className="mt-3">
                        Description
                    </Typography>
                    <ReactQuill style={{ height: "100px" }} theme="snow" name='body' value={value} onChange={setValue} placeholder='Describe your question....' />
                    <br />
                    <div className='mt-4 d-flex align-items-center'>
                        <div className="col controls">
                            <Button onClick={formik.handleSubmit} variant='outlined' className='text-capitalize bg-secondary text-white fw-light' color='success' >Submit</Button>
                            <Button onClick={() => setOpen(false)} variant='outlined' color="danger" className='mx-3 text-capitalize'>Cancel</Button>
                        </div>

                    </div>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}