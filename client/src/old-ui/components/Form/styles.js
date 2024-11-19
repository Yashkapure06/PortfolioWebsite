
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      
    },
    color:'#fff',
    
    fontFamily:"'Cormorant Upright', serif"
  },
  paper: {
    padding: theme.spacing(2),
    color:'#fff',
    backgroundColor:'#68516947'
  },
  bg:{
    fontStyle:'italic',
    borderRadius: 7,
    backgroundColor:'#68516999',
    color:'#fff'
  },
  form: {
    color:'#fff',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    color:'#fff',
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    
    color:'#fff',
    backgroundColor:'#68516999',
    marginBottom: 10,
  },
  buttonReset:{
    color:'#fff',
    backgroundColor:'#f5005780',
    marginBottom: 10,
  },
}));
