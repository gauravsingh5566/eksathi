import * as React from 'react';
import Button from '@mui/joy/Button';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Stack from '@mui/joy/Stack';
import Add from '@mui/icons-material/Add';
import Typography from '@mui/joy/Typography';
import { Checkbox, Divider, FormHelperText, ModalClose, Option, Textarea } from '@mui/joy';
import Select, { selectClasses } from '@mui/joy/Select';
import { useFormik } from 'formik';
import { useGlobalContext } from 'global/context';
import { toast } from 'react-hot-toast';
;

export default function AddEducation({ open = false, setOpen, action, edit = false, data }) {

    const { userData, api } = useGlobalContext();
    const formik = useFormik({
        initialValues: {
            institution_name: data?.institution_name || "",
            description: data?.description || "",
            degree: data?.degree || "",
            field_of_study: data?.field_of_study || "",
            grade: data?.grade || "",
            start_date: data?.start_date || new Date().getDate(),
            end_date: data?.end_date || new Date().getDate()
        },
        onSubmit: async (values) => {
            values = { ...values, user_id: userData?.id };
            console.log("Add education: ", values);
            let notify = toast.loading("Adding education...");
            try {
                if (edit) {
                    const res = await api.put(`/app/candidates/educations/${data?.id}`, values);
                    if (res?.status === 200) {
                        console.log("Successfully Updated");
                        setOpen(false);
                        toast.dismiss(notify);
                        toast.success("Saved");
                    }
                } else {
                    const res = await api.post(`/app/candidates/educations/${userData?.id}`, values);
                    if (res?.status === 201) {
                        console.log("Successfully Added");
                        setOpen(false);
                        toast.dismiss(notify);
                        toast.success("Successfully Added");
                    }
                }

            } catch (error) {
                console.log(error);
                toast.dismiss(notify);
                toast.error(error?.response?.data?.message || "Something went wrong!");
            }
        }
    });
    return (
        <React.Fragment>
            <Modal open={open} onClose={() => setOpen(false)} >
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-institution_name"
                    aria-describedby="basic-modal-dialog-description"
                // sx={{ maxWidth: 500 }}
                // variant="plain"
                >
                    <ModalClose />
                    <div className="px-3 my-3">
                        <Typography id="basic-modal-dialog-institution_name" component="h2" fontWeight={'lg'}>
                            {edit ? 'Edit education' : 'Add new education'}
                        </Typography>
                        <Typography id="basic-modal-dialog-description" textColor="text.tertiary" level="body3">
                            Share your education on this profile
                        </Typography>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <Stack spacing={2}>
                            <div className="row px-3">
                                <FormControl className='col'>
                                    <FormLabel>School*</FormLabel>
                                    <Input autoFocus required
                                        placeholder="Eg - ABC University"
                                        name='institution_name'
                                        value={formik.values.institution_name}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>
                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Degree*</FormLabel>
                                    <Input required
                                        placeholder='Eg- Bachelor of Computer Application'
                                        name='degree'
                                        value={formik.values.degree}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                <FormControl className='col'>
                                    <FormLabel>Field of study*</FormLabel>
                                    <Input required
                                        placeholder='Eg - Computer Science'
                                        name='field_of_study'
                                        value={formik.values.field_of_study}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>

                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Start date*</FormLabel>
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker className='rounded-3' views={['month', 'year']} />
                                    </LocalizationProvider> */}
                                    <Input type='date' required
                                        placeholder='May, 2018'
                                        name='start_date'
                                        value={formik.values.start_date}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                <FormControl className='col ' >
                                    <FormLabel>End date*</FormLabel>
                                    <Input type='date' required
                                        name='end_date'
                                        value={formik.values.end_date}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>

                            <FormControl className="row">
                                <div className="col">
                                    <FormLabel>Description*</FormLabel>
                                    <Textarea minRows={3} 
                                        placeholder="Describe your responsibilities in concise statements led by strong verbs"
                                        name='description'
                                        value={formik.values.description}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                    <FormHelperText>100 Charecters left</FormHelperText>
                                </div>
                            </FormControl>

                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Grade*</FormLabel>
                                    <Input required placeholder='A+'
                                        name='grade'
                                        value={formik.values.grade}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                {/* <FormControl className='col'>
                                    <FormLabel>Field of study*</FormLabel>
                                    <Input required
                                        placeholder='Bangalore'
                                    />
                                </FormControl> */}
                            </div>

                            <div className="row g-2 d-flex p-3">
                                {/* <Button type="button" variant='outlined' className='col'>Save as draft</Button> */}

                                <Button type="submit" className=' col'>{edit ? 'Save changes' : 'Add Education'}</Button>
                            </div>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}