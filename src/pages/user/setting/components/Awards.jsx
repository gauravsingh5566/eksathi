import { Button } from '@mui/joy'
import React from 'react'

function Awards() {
  return (
    <div className="job-container">
        <div className="job-header mb-4 d-flex flex-wrap align-items-center justify-content-between">
            <h4>Awards</h4>
            {
                
                    <Button variant='soft' >Add Awards </Button>
                    
            }
        </div>
        {/* <div className="job-list">
            {
                
                    <ResearchCard  />
                    
                
            }

        </div>
        <AddResearch  action='add' /> */}
    </div>
  )
}

export default Awards