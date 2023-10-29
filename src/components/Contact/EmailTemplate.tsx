import * as React from "react";

export type EmailProps = {
    name?: string;
    email: string;
    message: string;
}

export default function EmailTemplate({ name, email, message }: EmailProps) {
    const containerStyle: React.CSSProperties = {
        width: "auto",
        paddingTop: "4rem",
        paddingBottom: "4rem",
        display: "flex",
        justifyContent: "center",
        backgroundColor: "rgb(61, 49, 98)"
    };

    const innerContainerStyle: React.CSSProperties = {
        width: "auto",
        backgroundColor: "white",
        borderRadius: "0.5rem",
        boxShadow: "0 4px 6px -1px rgb(0, 0, 0)"
    };

    const titleTextStyle: React.CSSProperties = {
        margin: "2rem",
        marginBottom: "0",
        fontSize: "1.875rem",
        lineHeight: "2.25rem",
        textAlign: "center"
    };
    
    const dataLabelStyle: React.CSSProperties = {
        fontSize: "1.125rem",
        lineHeight: "1.75rem"
    };

    const rowSpacingStyle: React.CSSProperties = {
        paddingBottom: "0.75rem"
    };

    const dataContentStyle: React.CSSProperties = {
        boxSizing: "border-box",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        paddingTop: "0.25rem",
        paddingBottom: "0.25rem",
        width: "100%",
        border: "1px solid rgb(209, 213, 219)",
        borderRadius: "0.5rem",
        ...dataLabelStyle
    };

    return (
        <div style={containerStyle}>
            <div style={innerContainerStyle}>
                <h1 style={titleTextStyle}>A new message has been sent!</h1>

                <table style={{width: "100%", padding: "2rem"}}>
                    <tbody style={{width: "auto"}}>
                        <tr>
                            <td style={dataLabelStyle}>Name:</td>
                        </tr>
                        <tr>
                            <td style={rowSpacingStyle}>
                                <div style={dataContentStyle}>
                                    {name ? name : "Not Provided."}
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style={dataLabelStyle}>Email:</td>
                        </tr>
                        <tr>
                            <td style={rowSpacingStyle}>
                                <div style={dataContentStyle}>
                                    <a href={`mailto:${email}`} target="_blank">{email}</a>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td style={dataLabelStyle}>Message:</td>
                        </tr>
                        <tr>
                            <td>
                                <div style={dataContentStyle}>
                                    {message}
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
