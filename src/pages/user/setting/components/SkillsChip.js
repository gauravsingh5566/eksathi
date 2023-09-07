import { ChipDelete, Chip } from '@mui/joy';
import { useGlobalContext } from 'global/context';
import React from 'react'
import { toast } from 'react-hot-toast';

const SkillsChip = ({ id, name, userId, currentUser, deleteSkill }) => {
       
    return (
        <>
            {
                userId === currentUser ? 
                    <Chip
                        variant="soft"
                        color="info"
                        className="rounded-1 mr-2 mb-2"
                        endDecorator={<ChipDelete onDelete={()=> deleteSkill(id)} />}
                    >
                        {name}
                    </Chip> :
                    <Chip
                        variant="soft"
                        color="info"
                        className="rounded-1 mr-2 mb-2"
                    >
                        {name}
                    </Chip>
            }
        </>
    )
}

export default SkillsChip;