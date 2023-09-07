import * as React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import Divider from '@mui/joy/Divider';
import ReactQuill from 'react-quill';
import TextField from '@mui/material/TextField';
import {useFormik} from 'formik';
import { useGlobalContext } from 'global/context';

export default function EditAnswer({ open, setOpen, title, description, id, updateAnswer }) {
    const [value, setValue] = React.useState(description);
    const {userData, api, apiAuth} = useGlobalContext();
    const formik = useFormik({
        initialValues: {
            title: title,
        },
        onSubmit: async (values, action) => {
            values = {...values, body: value, email: userData?.email};
            console.log("Edit Values: ", values);
            try {
                const res = await api.put(`/app/answer/${id}`, values);
                if (res?.status === 200) {
                    console.log("Edit Res: ",res);
                    setOpen(false);
                    updateAnswer();
                }
            } catch(err) {
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
                onClose={() => setOpen(false)}
                sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        maxWidth: "90%",
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                        // maxHeight: "100%",
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
                        Edit your answer
                    </Typography>
                            {/* <Typography id="modal-desc" textColor="text.tertiary">
                                Make sure to use <code>aria-labelledby</code> on the modal dialog with an
                                optional <code>aria-describedby</code> attribute.
                            </Typography> */}
                    <Typography id="modal-desc" textColor="text.tertiary">
                        Title
                    </Typography>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="title"
                        name="title"
                        // label={<h6 className='text-secondary'>Title</h6>}
                        type="text"
                        placeholder='Ex- What is yuvamanthan? Can I participate?'
                        fullWidth
                        // variant="standard"
                        value={formik.values.title}
                        onChange={formik.handleChange}
                    />
                    <Typography id="modal-desc" textColor="text.tertiary">
                        Description
                    </Typography>
                    <ReactQuill theme="snow" name='body' value={value} onChange={setValue} placeholder='Describe your question....' />
                    <br />
                    <Divider />
                    <div className='mt-3 d-flex align-items-center'>
                        <div className="col controls">
                            <Button onClick={formik.handleSubmit} variant='outlined' className='text-capitalize fw-bold' >Submit</Button>
                            <Button onClick={() => setOpen(false)} variant='outlined' color="danger" className='mx-3 text-capitalize fw-bold'>Cancel</Button>
                        </div>
                       
                    </div>
                </Sheet>
            </Modal>
        </React.Fragment>
    );
}