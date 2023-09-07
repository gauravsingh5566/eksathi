import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Divider from '@mui/joy/Divider';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import { FormControl, FormLabel, Option, Stack, Textarea } from '@mui/joy';
import { KeyboardArrowDown, Report } from '@mui/icons-material';
// import Select, { selectClasses } from '@mui/joy/Select';
import { useFormik } from 'formik';
import { useGlobalContext } from 'global/context';
import { MenuItem, Select } from '@mui/material';
import LoginPopup from 'components/Modals/LoginPopup';
import { toast } from 'react-hot-toast';

export default function ReportContent({ open, setOpen, itemType, itemId }) {
    const { userData, setAuth, api, apiAuth } = useGlobalContext();

    const formik = useFormik({
        initialValues: {
            item_id: itemId,
            item_type: itemType,
            reason: "spam",
            comment: ""
        },
        onSubmit: async (values, action) => {
            action.setSubmitting(false);
            values = {...values, user_id: userData?.id};
            console.log(values);
            setOpen(false);
            try {
                const res = await api.post(`/app/report`, values);
                if (res?.status === 201) {
                    console.log("Report Res: ", res);
                    action.resetForm();
                    toast.success("This content has been reported successfully");
                }
            } catch (error) {
                console.log(error);
                if (error?.response?.status === 401) {
                    setAuth(true);
                } else {
                    toast.error("Report request has been failed");
                }
            }
        }
    });

    return (
        <React.Fragment>
            <Modal open={open} onClose={() => setOpen(false)}>
                <ModalDialog
                    variant="outlined"
                    role="alertdialog"
                    aria-labelledby="alert-dialog-modal-title"
                    aria-describedby="alert-dialog-modal-description"
                >
                    <Typography
                        id="alert-dialog-modal-title"
                        component="h2"
                        color='danger'
                        startDecorator={<Report />}
                    >
                        Report
                    </Typography>
                    <Divider />
                    <Typography id="basic-modal-dialog-description" textColor="text.tertiary">
                        Fill in the information of the report this content.
                    </Typography>
                    <form
                        onSubmit={formik.handleSubmit}
                    >
                        <Stack spacing={2}>
                            <FormControl>
                                <FormLabel>Reason</FormLabel>
                                {/* <Input autoFocus required /> */}
                                {/* <Select
                                    placeholder="Select a reason…"
                                    indicator={<KeyboardArrowDown />}
                                    sx={{
                                        // width: 240,
                                        [`& .${selectClasses.indicator}`]: {
                                            transition: '0.2s',
                                            [`&.${selectClasses.expanded}`]: {
                                                transform: 'rotate(-180deg)',
                                            },
                                        },
                                    }}
                                    name="reason"
                                    id="reason"
                                    onChange={formik.handleChange}
                                    value={formik.values.reason}
                                >
                                    <Option value="spam">Spam</Option>
                                    <Option value="offensive">Offensive</Option>
                                    <Option value="inappropriate">Inappropriate</Option>
                                    <Option value="duplicate">Duplicate</Option>
                                    <Option value="other">Other</Option>
                                </Select> */}
                                <Select
                                    name="reason"
                                    id="reason"
                                    value={formik.values.reason}
                                    onChange={formik.handleChange}

                                >

                                    <MenuItem value="spam">Spam</MenuItem>
                                    <MenuItem value="offensive">Offensive</MenuItem>
                                    <MenuItem value="inappropriate">Inappropriate</MenuItem>
                                    <MenuItem value="duplicate">Duplicate</MenuItem>
                                    <MenuItem value="other">Other</MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <FormLabel>Describe your reason</FormLabel>
                                <Textarea required
                                    placeholder="Discribe your reason here…"
                                    minRows={2}
                                    name="comment"
                                    id="comment"
                                    onChange={formik.handleChange}
                                    value={formik.values.comment}
                                />
                            </FormControl>
                            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'flex-end', pt: 2 }}>
                                <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                                    Cancel
                                </Button>
                                <Button type="submit" variant="solid" color="danger"
                                    disabled={!formik.values.reason || !formik.values.comment}
                                >
                                    Submit Report
                                </Button>
                            </Box>
                        </Stack>
                    </form>
                    <LoginPopup />
                </ModalDialog>
            </Modal>
        </React.Fragment>
    );
}