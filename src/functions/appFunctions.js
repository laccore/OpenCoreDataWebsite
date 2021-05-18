export const updateName = (name) => {
    console.log(name)
    let newName = ''
    if( (name.toLowerCase()).includes('dataset') || (name.toLowerCase()).includes('package') ) {
        newName = 'File Package'
    } else if((name.toLowerCase()).includes('digital')){
        newName = 'File'
    } else if ((name.toLowerCase()).includes('research')){
        newName = 'Project'
    } else {
        newName = name
    }
    return newName 
}