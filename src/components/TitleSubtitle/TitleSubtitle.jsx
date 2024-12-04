import './TitleSubtitle.css';

// 1. Alle html binnen de <></>
// 2. class mag niet, het is className

function TitleSubtitle({title, subTitle, className}) {
    return (
        <>
            <div>

                <h2 className={className}>

                    <span><strong>{title}</strong></span>
                </h2>

                <p className={className}>
                    <span>{subTitle}</span>
                </p>

            </div>
        </>
    )
}

export default TitleSubtitle;