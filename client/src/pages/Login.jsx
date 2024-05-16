import { useState, useRef } from 'react'
import {Avatar, Button, Container, IconButton, Paper, Stack, TextField, Typography} from '@mui/material'
import {CameraAlt} from '@mui/icons-material'
import { VisuallyHiddenInput } from '../components/styles/StyledComponent';
import {useFileHandler, useInputValidation,useStrongPassword} from '6pp'
import { usernameValidator } from '../utils/validators';
const Login = () => {
    const [isLogin,setIsLogin] = useState(true);
    const toggleLogin = () => setIsLogin((prev)=>!prev);
    const avatarRef = useRef<HTMLInputElement>(null)
    const name = useInputValidation("");
    const bio = useInputValidation("");
    const username = useInputValidation("",usernameValidator);
    const password = useStrongPassword();
    const avatar = useFileHandler("single");
  return (
    <Container component={"main"} maxWidth="xs" sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }}>
        <Paper
        elevation={3}
        sx={{
            padding:4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
        }}>
        {
            isLogin? (<>
                <Typography variant='h5'>
                    Login
                </Typography>
                <form style={{
                    width: "100%",
                    marginTop: "1rem"
                }}>
                    <TextField required fullWidth label="Username" margin="dense" size="small" value={username.value} onChange={username.changeHandler}
                        variant="outlined"
                    />
                    <TextField required fullWidth label="Password" type="password" margin="normal"  size="small" value={password.value} onChange={password.changeHandler}
                        variant="outlined"
                    />
                    <Button
                    sx={{
                        marginTop: "1rem",
                    }}
                    fullWidth
                     variant="contained" color="primary" type="submit">
                        SignIn
                    </Button>
                    <Typography
                    textAlign={'center'}
                    sx={{
                        marginTop: ".5rem",
                    }}
                    >If you dont have an account</Typography>
                    <Button
                    variant="text"
                    fullWidth
                    onClick={toggleLogin}
                    >
                        Register
                    </Button>
                </form>
            </>) : 
            (<>
                <Typography variant='h5'>
                    Sign Up
                </Typography>
                <form style={{
                    width: "100%",
                    marginTop: "1rem"
                }}>
                <Stack position={"relative"} width={"7rem"} margin={"auto"} display={"flex"} justifyContent={"center"} alignItems={"center"}>
                    <Avatar sx={{
                        width: "5rem",
                        height: "5rem",
                        objectFit: "contain"
                        
                    }}  
                    src={avatar.preview}
                    />
                    <IconButton sx={{
                        position: "absolute",
                        bottom: "0",
                        right:  "0",
                        color: "white",
                        bgcolor: "rgba(0,0,0,0.5)",
                        ":hover":{
                            bgcolor: "rgba(0,0,0,0.7)"
                        }
                    }}>
                        <>
                            <CameraAlt onClick={() => avatarRef?.current.click()}/>
                            <VisuallyHiddenInput ref={avatarRef} type="file" onChange={avatar.changeHandler}/>
                        </>
                    </IconButton>
                </Stack>
                {
                    avatar.error && (
                        <Typography color="error" variant='caption'>
                            {avatar.error}
                        </Typography>
                    )
                }
                <TextField required fullWidth label="FullName" margin="dense"  size="small" value={name.value} onChange={name.changeHandler}
                        variant="outlined"
                    />
                    <TextField required fullWidth label="Bio" margin="dense"  size="small" value={bio.value} onChange={bio.changeHandler}
                        variant="outlined"
                    />
                    
                    <TextField required fullWidth label="Username" margin="dense"  size="small" value={username.value} onChange={username.changeHandler}
                        variant="outlined"
                    />
                    {
                        username.error && (
                            <Typography color="error" variant="caption">
                                {username.error}
                            </Typography>
                        )
                    }
                    <TextField required fullWidth label="Password" type="password" margin="dense" size="small" value={password.value} onChange={password.changeHandler}
                        variant="outlined"
                    />
                    {
                        password.error && (
                            <Typography color="error" variant="caption">
                                {password.error}
                            </Typography>
                        )
                    }
                    <Button
                    sx={{
                        marginTop: "1rem",
                    }}
                    fullWidth
                     variant="contained" color="primary" type="submit">
                        SignUp
                    </Button>
                    <Typography
                    textAlign={'center'}
                    sx={{
                        marginTop: ".5rem",
                    }}
                    >Already have an account?</Typography>
                    <Button
                    variant="text"
                    fullWidth
                    onClick={toggleLogin}
                    >
                        Login
                    </Button>
                </form>
            </>)
        }

        </Paper>
    </Container>
  )
}

export default Login