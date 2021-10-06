import React from "react";

const Profile = () => {
  return (
    <>
      <div className={classes.root}>
        <CssBaseline />
        <ToastContainer
          position="top-center"
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <AppBar
          position="absolute"
          className={clsx(classes.appBar, open && classes.appBarShift)}
        >
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              className={clsx(
                classes.menuButton,
                open && classes.menuButtonHidden
              )}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              className={classes.title}
            >
              My Account
            </Typography>
            <ProfileDropdown />
          </Toolbar>
        </AppBar>
        {matches ? (
          <Drawer
            variant="temporary"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              ),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Nav index={4} />
          </Drawer>
        ) : (
          <Drawer
            variant="permanent"
            classes={{
              paper: clsx(
                classes.drawerPaper,
                !open && classes.drawerPaperClose
              ),
            }}
            open={open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Nav index={4} />
          </Drawer>
        )}
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={4} lg={4}>
                <Paper
                  className={fixedHeightPaper}
                  style={{
                    overflow: "hidden",
                    padding: "10% 5%  2% 5%",
                    height: "100%",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems=""
                    justifyContent="space-around"
                  >
                    <Avatar
                      alt="Your Profile Picture"
                      className={classes.large}
                      src={user.image}
                    />
                  </Box>
                  <TextField
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Full Name"
                    defaultValue={`${user.firstName} ${user.lastName}`}
                    variant="outlined"
                    style={{ marginTop: "20px", marginBottom: "10px" }}
                  />
                  <input
                    accept="image/*"
                    className={classes.input}
                    id="icon-button-file"
                    type="file"
                    style={{ display: "none" }}
                  />
                  <label
                    htmlFor="icon-button-file"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Fab
                      color="primary"
                      aria-label="upload picture"
                      component="span"
                      variant="extended"
                      size="medium"
                    >
                      <PhotoCamera />
                      Change Picture
                    </Fab>
                  </label>
                </Paper>
              </Grid>

              <Grid item xs={12} md={8} lg={8}>
                <Paper
                  className={fixedHeightPaper}
                  style={{ overflow: "hidden", padding: "5%" }}
                >
                  <TextField
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Email ID"
                    defaultValue={`${user.email}`}
                    variant="outlined"
                    style={{ margin: formMargin }}
                  />
                  <TextField
                    label="Mobile Number"
                    defaultValue={`${user.ph_no}`}
                    variant="outlined"
                    style={{ margin: formMargin }}
                    onChange={handleNumber}
                  />
                  <TextField
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Gender"
                    defaultValue={`${user.gender}`}
                    variant="outlined"
                    style={{ margin: formMargin }}
                  />
                  <TextField
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Employee ID"
                    defaultValue={`${user.employee_id}`}
                    variant="outlined"
                    style={{ margin: formMargin }}
                  />
                  <TextField
                    InputProps={{
                      readOnly: true,
                    }}
                    label="Reporting Officer"
                    defaultValue={`${user.reporting_officer?.name}`}
                    variant="outlined"
                    style={{ margin: formMargin }}
                  />
                  <Fab
                    color="primary"
                    aria-label="upload picture"
                    component="span"
                    variant="extended"
                    size="medium"
                    style={{ marginTop: formMargin }}
                    onClick={updateProfile}
                  >
                    Edit Phone Number
                  </Fab>
                </Paper>
              </Grid>

              <Grid item xs={12}>
                <Paper
                  className={classes.paper}
                  style={{ overflow: "hidden", paddingBottom: "2%" }}
                >
                  <Grid
                    container
                    direction="column"
                    spacing={1}
                    display="flex"
                    justify="center"
                    alignItems="flex-start"
                  >
                    <Grid
                      item
                      style={{
                        width: "100%",
                        marginTop: "3%",
                        marginLeft: "7%",
                      }}
                    >
                      <Title>Change Password</Title>
                    </Grid>
                    <Grid
                      item
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginRight: "5%",
                      }}
                    >
                      <TextField
                        error={
                          input.new_password !== ""
                            ? input.old_password === ""
                            : false
                        }
                        helperText={
                          input.new_password !== ""
                            ? input.old_password === ""
                              ? "Enter Old Password "
                              : ""
                            : ""
                        }
                        inputRef={oldPassRef}
                        type="password"
                        variant="outlined"
                        label="Old Password"
                        name="old_password"
                        onChange={handleInput}
                        fullWidth
                        required
                        align="left"
                      />
                    </Grid>
                    <Grid
                      item
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginRight: "5%",
                      }}
                    >
                      <TextField
                        error={
                          input.new_password !== ""
                            ? !passRegex.test(input.new_password)
                            : false
                        }
                        helperText={
                          input.new_password !== ""
                            ? !passRegex.test(input.new_password)
                              ? "Password Must be of atleast 8 characters and must contain 1 lowercase 1 uppercase and 1 number"
                              : ""
                            : ""
                        }
                        inputRef={newPassRef}
                        type="password"
                        variant="outlined"
                        label="New Password"
                        name="new_password"
                        onChange={handleInput}
                        required
                        fullWidth
                        align="left"
                      />
                    </Grid>
                    <Grid
                      item
                      style={{
                        width: "90%",
                        marginLeft: "5%",
                        marginRight: "5%",
                      }}
                    >
                      <TextField
                        inputRef={confirmPassRef}
                        error={
                          input.confirm_password !== ""
                            ? input.new_password !== input.confirm_password
                            : false
                        }
                        helperText={
                          input.confirm_password !== ""
                            ? input.new_password !== input.confirm_password
                              ? "Passwords Do not Match"
                              : ""
                            : ""
                        }
                        variant="outlined"
                        type="password"
                        label="Confirm Password"
                        name="confirm_password"
                        onChange={handleInput}
                        fullWidth
                        required
                        align="left"
                      />
                    </Grid>
                    <Grid item style={{ width: "100%" }} align="center">
                      <Fab
                        color="primary"
                        aria-label="upload picture"
                        component="span"
                        variant="extended"
                        size="medium"
                        style={{ marginTop: "1%" }}
                        onClick={changePass}
                      >
                        <LockIcon />
                        Change Password
                      </Fab>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12}>
                <Paper>
                  <Box>
                    <KJSIEIT />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
    </>
  );
};

export default Profile;
