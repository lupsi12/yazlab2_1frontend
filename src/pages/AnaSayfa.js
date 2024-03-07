import React from 'react';
import {Box, Button, Card, Stack, TextField, Typography} from "@mui/material";
function AnaSayfa() {
    {
        return (
            <>
                <Box
                    sx={{
                        height: "100vh",
                        background: "primary.main",
                    }}
                >
                    <Stack alignItems="center" justifyContent="center" sx={{ height: 1 }}>
                        <Card
                            sx={{
                                px: 5,
                                py: 6,
                                width: 1,
                                maxWidth: 480,
                                borderRadius: 3,
                            }}
                        >
                    <Typography variant="h4" sx={{ mt: 2, mb: 5 }}>
                        Makale arama motoru
                    </Typography>
                            <Stack spacing={2}>
                                <TextField
                                    {...("ARAMA", { required: "ANAHTAR KELİMEYİ GİRİNİZ" })}
                                    variant="outlined"
                                    name="ARAMA"
                                    label="Anahtar kelime"
                                    id="KELİME"
                                    placeholder="ANAHTAR KELİMEYİ GİRİNİZ"
                                    type="text"
                                    autoComplete="off"
                                />
                            </Stack>
                            <Button color="primary" variant="contained" fullWidth size="large" type="submit" sx={{ mt: 3, mb: 2 }}>
                                MAKALE ARA
                            </Button>
                        </Card>
                    </Stack>
                </Box>
            </>
        )
    }

}
export default AnaSayfa;