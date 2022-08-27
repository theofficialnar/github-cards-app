import './Card.css';

const Card = ({ avatar_url, name, company, url }) => {
    return (
        <div className='github-profile'>
            <img src={avatar_url} />
            <div className='info'>
                <div className='name'>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        {name}
                    </a>
                </div>
                <div className='company'>{company}</div>
            </div>
        </div>
    )
}

export default Card;