import { useState } from "react";

export const Test = () => {

    const [command, setCommand] = useState()

    const executePrompt = (e) =>{
        let commandValue
        e.key == 'Enter' ? (
            commandValue = e.target.value,
            console.log(commandValue)
        ) : ''
    }

    return <>
    <div className="col-12">
        <input className="form-control" type="text" onKeyDown={executePrompt} />
    </div>
    </>;
}