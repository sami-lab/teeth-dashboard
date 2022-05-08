import React, { useEffect } from 'react';
import {
  SwipeableDrawer,
  useMediaQuery,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Collapse,
  Typography,
  Grid,
} from '@material-ui/core';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import PersonIcon from '@material-ui/icons/Person';

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: 240,
    flexShrink: 0,
  },
  drawerPaper: {
    width: 240,
    zIndex: theme.zIndex.appBar - 1,
    [theme.breakpoints.down('sm')]: {
      marginTop: 0,
    },
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),

    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  itemMargin: {
    marginLeft: '43px',
  },
  nestedItemMargin: {
    marginLeft: '20px',
  },
  buttonMargin: {
    marginLeft: '5px',
  },
}));
export default function Sidebar() {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down('sm'));

  const [open, setOpen] = React.useState(true);
  const [collapse1Open, setCollapse1Open] = React.useState(false);

  useEffect(() => {
    if (matchesSM) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [matchesSM]);
  const handleDrawerClose = () => {
    setOpen(false);
  };
  console.log(open, matchesSM);

  return (
    <SwipeableDrawer
      className={classes.drawer}
      variant={matchesSM ? 'temporary' : 'persistent'}
      anchor="left"
      open={open}
      //open={true}
      onClose={handleDrawerClose}
      onOpen={() => setOpen(true)}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <List style={{ marginTop: '1em' }} disablePadding>
        <ListItem className={classes.itemMargin}>
          <Button
            style={{
              borderRadius: 0,
              backgroundColor: '#0030AB',
              fontWeight: 'bold',
              color: '#fff',
            }}
            className={classes.buttonMargin}
          >
            AGENDA
          </Button>
        </ListItem>
        {/* RDV en ligne */}
        <ListItem
          disableGutters
          className={classes.itemMargin}
          style={{ cursor: 'pointer' }}
          onClick={() => setCollapse1Open((s) => !s)}
        >
          <Grid container alignItems="center">
            <Grid item>
              <span style={{ fontSize: '2em' }}>&#8227;</span>
            </Grid>
            <Grid item>
              <Typography
                variant="body2"
                style={{
                  fontSize: '12px',
                  marginLeft: '10px',
                  display: 'flex',
                  alignItems: 'flex-end',
                  marginTop: '5px',
                }}
              >
                RDV en ligne
              </Typography>
            </Grid>
          </Grid>
        </ListItem>
        {/* RDV en ligne - Nested items */}
        <Collapse in={collapse1Open} timeout="auto" unmountOnExit>
          <List component="div" className={classes.itemMargin} disablePadding>
            <ListItem className={classes.nestedItemMargin} disableGutters>
              <Grid container alignItems="center">
                <Grid item>
                  <span style={{ fontSize: '2em' }}>&#8227;</span>
                </Grid>
                <Grid item>
                  <Typography
                    variant="body2"
                    style={{
                      fontSize: '12px',
                      marginLeft: '10px',
                      display: 'flex',
                      alignItems: 'flex-end',
                      marginTop: '5px',
                    }}
                  >
                    RDV en ligne
                  </Typography>
                </Grid>
              </Grid>
            </ListItem>
          </List>
        </Collapse>
        <ListItem
          //   component={Link}
          //   to="/account"
          button
          //selected={router.location.pathname === '/account'}
        >
          <ListItemIcon>
            <PersonIcon
              style={{
                width: '18px',
                height: '18px',
              }}
            />
          </ListItemIcon>
          <ListItemText primary="My Account" />
        </ListItem>
      </List>
    </SwipeableDrawer>
  );
}
