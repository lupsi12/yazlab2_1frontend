import React, {useCallback, useEffect, useState} from 'react';
import {Box, Button, Card, Stack, TextField, Typography} from "@mui/material";
import Form from 'react-bootstrap/Form';
import {ChangeEvent} from "react";
import {useNavigate} from "react-router-dom";
function AnaSayfa() {
    {
        const [isChecked, setIsChecked] = useState(false);
        const [part, setPart] = useState();
        const [kelimeText, setKelimeText] = useState('');

        const navigate = useNavigate()
        const handleSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
            console.log("---", e.target.checked);
            setIsChecked(!isChecked)
            console.log('Switch değeri değişti. Yeni değer: ' + !isChecked);
        }
        const handleChangeText = event => {
            setKelimeText(event.target.value);
            console.log('Input değeri : ', event.target.value);
        };

        const makePart = useCallback(
            async () => {
                const sendRequest = async () => {
                    try {
                        await fetch("/part", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({
                                id: 1,
                                kelime: kelimeText,
                                durum: isChecked,
                            }),
                        })
                    } catch (err) {
                        console.log(err)
                    }
                }

                try {
                    await sendRequest()
                    console.log(isChecked+" part created. "+ kelimeText)
                } catch (error) {
                    console.error("An error occurred:", error)
                }
            },
        )


        const makeSearch = useCallback(
            async () => {
                const response = await fetch(`/part/1`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                })

                const partInfo = await response.json()

                console.log(isChecked+" part updated. "+ kelimeText+" ddd "+partInfo.durum+" ddd "+partInfo.kelime)

                partInfo.kelime = kelimeText
                partInfo.duzelenKelime = kelimeText+' -- yazımı düzeltilmiş sonuçları görüyorsunuz'
                partInfo.durum = isChecked

                console.log(isChecked+" part updated. "+ kelimeText+" ddd "+partInfo.durum+" ddd "+partInfo.kelime+" ddd "+partInfo.duzelenKelime)
                const putResponse = await fetch(`/part/1`, {
                    method: "PUT",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(partInfo), // Send modified user data
                })

                if (putResponse.ok) {
                    console.log(isChecked+" part updated. "+ kelimeText+" ddd "+partInfo.durum+" ddd "+partInfo.kelime+" ddd "+partInfo.duzelenKelime)
                }
            },
        )

        function listele(){
            navigate("/liste")
        }

        return (
                <>
                    <Box
                        sx={{
                            height: "100vh",
                            background: "primary.main",
                        }}
                    >
                        <Stack alignItems="center" justifyContent="center" sx={{height: 1}}>
                            <Card
                                sx={{
                                    px: 5,
                                    py: 6,
                                    width: 1,
                                    maxWidth: 480,
                                    borderRadius: 3,
                                }}
                            >
                                <Typography variant="h4" sx={{mt: 2, mb: 5}}>
                                    Makale arama motoru
                                </Typography>
                                <Stack spacing={2}>
                                    <TextField
                                        {...("ARAMA", {required: "ANAHTAR KELİMEYİ GİRİNİZ"})}
                                        variant="outlined"
                                        name="ARAMA"
                                        label="Anahtar kelime"
                                        id="KELİME"
                                        placeholder="ANAHTAR KELİMEYİ GİRİNİZ"
                                        type="text"
                                        autoComplete="off"
                                        onChange={handleChangeText}
                                        value={kelimeText}
                                    />
                                </Stack>
                                <Form.Check // prettier-ignore
                                    type="switch"
                                    id="custom-switch"
                                    label="PDF indir"
                                    checked={isChecked}
                                    onChange={handleSwitchChange}
                                />
                                <Button color="primary" variant="contained" fullWidth size="large" type="submit"
                                    onClick={makeSearch}    sx={{mt: 3, mb: 2}}>
                                    MAKALE ARA
                                </Button>
                                <Button color="primary" variant="contained" fullWidth size="large" type="submit"
                                        onClick={listele}    sx={{mt: 3, mb: 2}}>
                                   LİSTELE

                                </Button>
                            </Card>
                        </Stack>
                    </Box>
                </>
            )
        }

    }

export default AnaSayfa;