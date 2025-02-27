
const ExceptionLogger = ()=>{

    const logEvent = (msg)=>{
        console.log("Event details :::"+msg)
    }

    const logError = (error)=>{
        console.error("Execption details :::"+error)
    }

    return {logError,logEvent}

}
 export default ExceptionLogger;