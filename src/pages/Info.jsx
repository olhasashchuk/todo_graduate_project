import { Typography, List, ListItem, ListItemText } from '@mui/material';
export default function Info() {
    return (
        <>
            <section>
                <Typography variant="h3" align="center">Instructions for Using TODO List</Typography>
                <List sx={{ mt: 2, ml: 12 }}>
                    <ListItem sx={{ mb: 4 }}>
                        <ListItemText primary={<b>Adding Tasks:</b>} />
                        <List sx={{ listStyle: 'disc', ml: 4 }}>
                            <ListItem>
                                <ListItemText primary="Enter the task text in the input field." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Press the 'Enter' key or the 'Add' button to add the task to the list." />
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem sx={{ mb: 4 }}>
                        <ListItemText primary={<b>Searching Tasks by Query:</b>} />
                        <List sx={{ listStyle: 'disc', ml: 4 }}>
                            <ListItem>
                                <ListItemText primary="Enter text in the search field." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Press the 'Enter' key or the 'Magnifying Glass' button to find tasks according to search conditions." />
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem sx={{ mb: 4 }}>
                        <ListItemText primary={<b>Deleting All Tasks:</b>} sx={{ flexGrow: 0}}/>
                        <List sx={{ listStyle: 'disc', ml: 4 }}>
                            <ListItem>
                                <ListItemText primary="Press the 'Delete' button to delete all tasks." />
                            </ListItem>
                        </List>
                    </ListItem>
                    <ListItem sx={{ mb: 4 }}>
                        <ListItemText primary={<b>General Recommendations:</b>} />
                        <List sx={{ listStyle: 'disc', ml: 4 }}>
                            <ListItem>
                                <ListItemText primary="Keep your task list up to date by deleting completed or outdated tasks." />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Use the TODO list to organize your time and tasks to be more productive and organized." />
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </section>
        </>
    )
}