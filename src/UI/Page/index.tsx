import React, {FC} from "react";
import CSS from 'csstype';

const page: CSS.Properties = {
    width: '1200px',
    height: '90vh',
    boxShadow: '7px 9px 32px -9px rgba(0,0,0,0.75)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '20px',
    boxSizing: 'border-box'
}

const Page: FC<{children: any}> = ({children}) => (
    <div style={page}>
        {children}
    </div>
)

export default Page;