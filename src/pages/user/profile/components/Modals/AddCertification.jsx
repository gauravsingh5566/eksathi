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
import { KeyboardArrowDown } from '@mui/icons-material'; import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useFormik } from 'formik';
import { useGlobalContext } from 'global/context';
import { toast } from 'react-hot-toast';
;

export default function AddCertification({ open = false, setOpen, action, edit = false, data, getCertifications }) {
    const { userData, api } = useGlobalContext();
    const formik = useFormik({
        initialValues: {
            certification_name: data?.certification_name || "",
            issuing_organization: data?.issuing_organization || "",
            issue_date: data?.issue_date || new Date().getDate(),
            expiration_date: data?.expiration_date || new Date().getDate(),
            certificate_id: data?.certificate_id || "",
            certificate_url: data?.certificate_url || "",
        },
        onSubmit: async (values) => {
            values = { ...values, user_id: userData?.id };
            console.log("Add experience: ", values);
            let notify = toast.loading("Adding certificate...");
            try {
                if (edit) {
                    const res = await api.put(`/app/candidates/certifications/${data?.id}`, values);
                    if (res?.status === 200) {
                        console.log("Successfully Updated");
                        setOpen(false);
                        getCertifications();
                        toast.dismiss(notify);
                        toast.success("Saved");
                    }
                } else {
                    const res = await api.post(`/app/candidates/certifications/${userData?.id}`, values);
                    if (res?.status === 201) {
                        console.log("Successfully Added");
                        setOpen(false);
                        getCertifications();
                        toast.dismiss(notify);
                        toast.success("Certificate Added");
                    }
                }

            } catch (error) {
                console.log(error);
                toast.dismiss(notify);
                toast.success("Something went wrong!");
            }
        }
    });

    return (
        <React.Fragment>
            <Modal open={open} onClose={() => setOpen(false)} >
                <ModalDialog
                    aria-labelledby="basic-modal-dialog-title"
                    aria-describedby="basic-modal-dialog-description"
                // sx={{ maxWidth: 500 }}
                // variant="plain"
                >
                    <ModalClose />
                    <div className="px-3 my-3">
                        <Typography id="basic-modal-dialog-title" component="h2" fontWeight={'lg'}>
                            {edit ? 'Edit certification' : 'Add new certification'}
                        </Typography>
                        <Typography id="basic-modal-dialog-description" textColor="text.tertiary" level="body3">
                            Share your awarded certification on this profile
                        </Typography>
                    </div>
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <Stack spacing={2}>
                            <div className="row px-3">
                                <FormControl className='col'>
                                    <FormLabel>Name*</FormLabel>
                                    <Input autoFocus required
                                        placeholder="Eg - Oracle Certified Java Developer"
                                        name='certification_name'
                                        value={formik.values.certification_name}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>
                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Issuing organization*</FormLabel>
                                    <Input required
                                        name='issuing_organization'
                                        placeholder='Eg - Oracle'
                                        value={formik.values.issuing_organization}
                                        onChange={formik.handleChange}
                                    />
                                </FormControl>

                            </div>
                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Issue date*</FormLabel>
                                    {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DatePicker className='rounded-3' views={['month', 'year']} />
                                    </LocalizationProvider> */}
                                    <Input type='date' required
                                        name='issue_date'
                                        placeholder='Issued Date'
                                        value={formik.values.issue_date}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                                <FormControl className='col ' >
                                    <FormLabel>Expiry date*</FormLabel>
                                    <Input type='date' required
                                        name='expiration_date'
                                        placeholder='Expiry Date'
                                        value={formik.values.expiration_date}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>
                            <div className="row d-flex flex-wrap">
                                <FormControl className='col'>
                                    <FormLabel>Certificate ID*</FormLabel>
                                    <Input required
                                        placeholder='Eg - ABCDGS325256'
                                        name='certificate_id'
                                        value={formik.values.certificate_id}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>

                            </div>
                            <div className="row">
                                <FormControl className='col '>
                                    <FormLabel>Certifiacte URL*</FormLabel>
                                    <Input 
                                        startDecorator={
                                            <>
                                                <Typography>https:// </Typography>
                                            </>
                                        }
                                        name='certificate_url'
                                        value={formik.values.certificate_url}
                                        onChange={formik.handleChange}
                                        onError={formik.handleError}
                                    />
                                </FormControl>
                            </div>
                            <div className="row g-2 d-flex p-3">
                                {/* <Button type="button" variant='outlined' className='col'>Save as draft</Button> */}

                                <Button type="submit" className=' col'>{edit ? 'Save changes' : 'Add Certification'}</Button>
                            </div>
                        </Stack>
                    </form>
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}