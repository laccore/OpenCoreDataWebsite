import React from 'react'
import PropTypes from 'prop-types'

// ------------------------
// Material
// ------------------------
import {  Box, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, List, ListItem, ListItemText, Table, Typography } from '@material-ui/core/'

// import descriptionData from "../assets/data/researchProjectDescriptions.json"
import { descriptions } from "../assets/data/projectContent"

// import DataGrid, {
//     Column, 
//     ColumnFixing,
//     SearchPanel,
//     Export
// } from 'devextreme-react/data-grid'

const DescriptionsDialog = ({open, setOpen}) => {
    
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Dialog
            open={open}
            maxWidth={'xl'}
            // fullScreen
            onClose={handleClose}
            aria-labelledby="dataset-descriptons-title"
            aria-describedby="dataset-descriptons-description"
        >
            <DialogTitle id="dataset-descriptons-title">
                {`Dataset Descriptions`}
            </DialogTitle>
            <DialogContent>
            
                <List>
                    {descriptions.map(item => 
                        <ListItem>
                            <ListItemText
                                primary={
                                    item.OCD_short_names
                                }
                                secondary={
                                    item.description
                                }
                            >

                            </ListItemText>
                        </ListItem>
                    )}
                </List>

            </DialogContent>
            
            <DialogActions>
                <Button onClick={handleClose} color="primary" autoFocus>
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    )
}

DescriptionsDialog.propTypes = {

}

export default DescriptionsDialog

