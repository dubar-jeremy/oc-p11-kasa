
import './tag.css';

interface TagProps {
    tag: string;
}

const Tag = ({ tag }: TagProps) => {
    return (
        <div className="tag">
            <p className="tag_content">{tag}</p>
        </div>
    )
}

export default Tag