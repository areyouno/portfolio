import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import GitHubIcon from "@material-ui/icons/GitHub";
import LaunchSharpIcon from "@material-ui/icons/LaunchSharp";
import React from "react";
import "./Projects.scss";

const Projects = () => {
       const useStyles = makeStyles(theme => ({
              margin: {
                     margin: theme.spacing(1)
              },
              button: {
                     backgroundColor: "#ababab",
                     color: "#000000de",
                     "&:hover": {
                            backgroundColor: "#d5d5d5",
                            color: "#000000de"
                     }
              },
              buttonView: {
                     backgroundColor: "#cd8e26",
                     color: "#000000de",
                     "&:hover": {
                            backgroundColor: "#e39e2d",
                            color: "#000000de"
                     }
              }
       }));
       const classes = useStyles();

       return (
              <div className={"projects"}>
                     <span>
                            <section>
                                   <h2>Reminders app</h2>
                                   <p>
                                          A mock implementation of the Reminders app from Apple - where you add, edit,
                                          remove, and search through a list of reminders.
                                   </p>
                                   <ul className={"projects__tech-list"}>
                                          <li>React</li>
                                          <li>SASS</li>
                                   </ul>
                                   <Button
                                          variant="contained"
                                          size="medium"
                                          endIcon={<GitHubIcon />}
                                          href="https://github.com/areyouno/reminder-app"
                                          target="_blank"
                                          className={`${classes.margin} ${classes.button}`}>
                                          GitHub
                                   </Button>
                                   <Button
                                          variant="contained"
                                          size="medium"
                                          endIcon={<LaunchSharpIcon />}
                                          href="https://areyouno.github.io/reminder-app/"
                                          target="_blank"
                                          color="primary"
                                          className={`${classes.margin} ${classes.buttonView}`}>
                                          Live View
                                   </Button>
                            </section>
                     </span>
              </div>
       );
};

export default Projects;
