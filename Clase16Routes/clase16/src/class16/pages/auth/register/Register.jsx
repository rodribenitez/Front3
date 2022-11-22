import React from 'react'
import styled from './styled.module.css'
import PasswordField from '../../../common/Password-field/PasswordField'

const Register = () => {
  return (
    <div className={styled.authContainer}>
      <form onSubmit={handleSubmit} className={styled.formContainer}>
        <TextField
          label="Email"
          size="small"
          fullWidth
          value={values.email}
          variant="outlined"
          onChange={handleChange("email")}
        />
        <PasswordField {...props} />
        <Box component="div" sx={{ display: "flex", justifyContent: "space-between", gap: "10px", flexWrap: "wrap" }}>
          <Button type="button" variant="outlined" size="small" sx={{ width: "45%" }}>Cancel</Button>
          <Button type="submit" variant="contained" size="small" sx={{ width: "45%" }}>Submit</Button>
        </Box>
      </form>
    </div>
  )
}

export default Register