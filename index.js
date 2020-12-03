const eplusDevList = ['Parca', 'Galego', 'Xara', 'Baqueta', 'Na', 'Lindo', 'Pablito', 'Bahia']

function listDevs(list){

    const devs = [] 

    function showListDevs(devs){
         for(dev  in  devs){
             console.log(dev)
         }
    } 
    
    
    showListDevs(devs)
}

listDevs(eplusDevList)

//a função deve dar console.log em cada um dos desenvolvedores da e-plus.
