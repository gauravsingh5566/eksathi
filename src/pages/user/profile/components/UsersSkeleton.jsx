import { AspectRatio, Card, CardContent, CardOverflow, Divider, Typography } from '@mui/joy';
import { Skeleton } from '@mui/material';
import React from 'react'

const UsersSkeleton = () => {
    return (
        <>
            <div className="col-lg-4 responsive-column-half my-2">
                <Card
                    orientation="horizontal"
                    variant="outlined"
                    sx={{
                        bgcolor: 'background.body',
                        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
                    }}
                >
                    <CardOverflow>
                        <AspectRatio ratio="1" sx={{ width: 90 }}>
                            <Skeleton animation="wave" variant="square" width={90} height={90} />

                        </AspectRatio>

                    </CardOverflow>
                    <CardContent sx={{ px: 2 }}>

                        <Skeleton
                            animation="wave"
                            height={10}
                            width="80%"
                            style={{ marginBottom: 6 }}
                        />

                        <Skeleton animation="wave" height={10} width="40%" />

                    </CardContent>

                    <Divider />
                    <CardOverflow
                        variant="soft"
                        color="secondary"
                        sx={{
                            px: 0.2,
                            writingMode: 'vertical-rl',
                            textAlign: 'center',
                            fontSize: 'xs2',
                            fontWeight: 'xl2',
                            letterSpacing: '1px',
                            textTransform: 'uppercase',
                        }}
                    >
                      <Typography>
                      <Skeleton animation="wave" />
                      </Typography>
                    </CardOverflow>
                </Card>
            </div>
        </>
    )
}

export default UsersSkeleton;