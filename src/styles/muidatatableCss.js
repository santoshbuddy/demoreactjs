import { createMuiTheme} from '@material-ui/core/styles';
export const muiTableStyles = {
    getMuiTheme,
 getMuiThemeNoToolBar

};
function getMuiTheme() { 
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MuiFormControl: {
        marginNormal: {
        marginTop: '0px',
        marginBottom: '0px',
      }
      },
      MuiIconButton: {
        root: {
          padding: '2px',
        }
      }, 
      MuiTable: {
        root: {
          fontFamily: 'sans-serif',
        }
      },
      // MuiTableCell: {
      //   root:{
      //     padding: '0px !important',
      //   }, 
      //   head: {                 
      //     fontSize: '0.8rem',
      //     fontWeight: '600',
      //   }
      // }, 
      MuiTableRow:{
        root: {
          height: 'auto !important',
        },
        hover: {
          '&:hover': {
            backgroundColor: '#E5F1F6 !important',
          }
        }
      },
      MUIDataTableSelectCell:{
        headerCell: {
          border: "1px solid #ccc",
          align : 'center',
          height: '16px !important',
          padding: '0px !important',
          backgroundColor: "#f4f3f3",
        }   
      }, 
      MUIDataTableHeadCell: {
        root: {
          background: '#E4EAED', /* Old browsers */
          background: '-moz-linear-gradient(top, #E4EAED 0%, #F7F9FA 100%)', /* FF3.6-15 */
          background: '-webkit-linear-gradient(top, #E4EAED 0%,#F7F9FA 100%)', /* Chrome10-25,Safari5.1-6 */
          background: 'linear-gradient(to bottom, #E4EAED 0%,#F7F9FA 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#E4EAED", endColorstr="#F7F9FA",GradientType=0 )', /* IE6-9 */
          color: '#00395D',
          fontSize: '12px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          verticalAlign: 'bottom',
          height: '48px !important',
          padding: '0px 9px 6px !important',
          borderRight: '1px solid #d5d5d6',
          borderTop: '1px solid #d5d5d6',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6'
          },
        },
        sortActive: {
          color: '#00395D',
        },
        fixedHeader :{
          backgroundColor: "#f4f3f3",
        }
      },      
      MuiTableSortLabel:{
        active:{
          color: '#00395D',
        }
      },
      MUIDataTableBodyCell: {
        root: {
          whiteSpace: 'nowrap',
          padding:'6px',
          borderBottom:'0px',
          borderRight: '1px solid #d5d5d6',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6'
          },          
        }
      },
      MuiTableCell:{
        body:{
          fontSize: '12px'
        }
      },
      MUIDataTableBodyRow: {
        root: {
          '&:nth-child(even)': {
            backgroundColor: '#F6F7F7'
          },
          '&:last-child':{
            borderBottom: '1px solid #d5d5d6'
          },
        }
      },
    }
  });
};

function getMuiThemeNoToolBar() { 
  return createMuiTheme({
    typography: {
      useNextVariants: true,
    },
    overrides: {
      MuiFormControl: {
        marginNormal: {
        marginTop: '0px',
        marginBottom: '0px',
      }
      },
      MuiIconButton: {
        root: {
          padding: '2px',
        }
      }, 
      MuiTable: {
        root: {
          fontFamily: 'sans-serif',
        }
      },
      // MuiTableCell: {
      //   root:{
      //     padding: '0px !important',
      //   }, 
      //   head: {                 
      //     fontSize: '0.8rem',
      //     fontWeight: '600',
      //   }
      // }, 
      MuiTableRow:{
        root: {
          height: 'auto !important',
        },
        hover: {
          '&:hover': {
            backgroundColor: '#E5F1F6 !important',
          }
        }
      },
      MUIDataTableSelectCell:{
        headerCell: {
          border: "1px solid #ccc",
          align : 'center',
          height: '16px !important',
          padding: '0px !important',
          backgroundColor: "#f4f3f3",
        }   
      }, 
      MUIDataTableHeadCell: {
        root: {
          background: '#E4EAED', /* Old browsers */
          background: '-moz-linear-gradient(top, #E4EAED 0%, #F7F9FA 100%)', /* FF3.6-15 */
          background: '-webkit-linear-gradient(top, #E4EAED 0%,#F7F9FA 100%)', /* Chrome10-25,Safari5.1-6 */
          background: 'linear-gradient(to bottom, #E4EAED 0%,#F7F9FA 100%)', /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
          filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr="#E4EAED", endColorstr="#F7F9FA",GradientType=0 )', /* IE6-9 */
          color: '#00395D',
          fontSize: '12px',
          textAlign: 'center',
          whiteSpace: 'nowrap',
          verticalAlign: 'bottom',
          height: '48px !important',
          padding: '0px 9px 6px !important',
          borderRight: '1px solid #d5d5d6',
          borderTop: '1px solid #d5d5d6',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6'
          },
        },
        sortActive: {
          color: '#00395D',
        },
        fixedHeader :{
          backgroundColor: "#f4f3f3",
        }
      },      
      MuiTableSortLabel:{
        active:{
          color: '#00395D',
        }
      },
      MUIDataTableBodyCell: {
        root: {
          whiteSpace: 'nowrap',
          padding:'6px',
          borderBottom:'0px',
          borderRight: '1px solid #d5d5d6',
          '&:first-child':{
            borderLeft: '1px solid #d5d5d6'
          },          
        }
      },
      MuiTableCell:{
        body:{
          fontSize: '12px'
        }
      },
      MUIDataTableBodyRow: {
        root: {
          '&:nth-child(even)': {
            backgroundColor: '#F6F7F7'
          },
          '&:last-child':{
            borderBottom: '1px solid #d5d5d6'
          },
        }
      },
      MUIDataTableToolbar: {
        root: {
           display: 'none'
       }
      }	
    }
  });
};