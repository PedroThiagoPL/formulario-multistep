import {
    BsFillEmojiHeartEyesFill,
    BsFillEmojiSmileFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiFrownFill,
} from 'react-icons/bs'

import './ReviewForm.css'

function ReviewForm ({data, updateFielHandler}) {
    return (
        <div className='review-form'>
            <div className="form-control score-container">
                <label className='radio-container'>
                    <input 
                    type="radio" 
                    value="unsatisfied" 
                    name="review" 
                    required 
                    checked={data.review === "unsatisfied"}
                    onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiFrownFill/>
                    <p>Insastifeito</p>
                </label>
                <label className='radio-container'>
                    <input 
                    type="radio" 
                    value="neutral" 
                    name="review" 
                    required 
                    checked={data.review === "neutral"}
                    onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiNeutralFill/>
                    <p>Poderia ser melhor</p>
                </label>
                <label className='radio-container'>
                    <input 
                    type="radio" 
                    value="satisfied" 
                    name="review" 
                    required 
                    checked={data.review === "satisfied"}
                    onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiSmileFill/>
                    <p>Sastifeito</p>
                </label>
                <label className='radio-container'>
                    <input 
                    type="radio" 
                    value="very_satisfied" 
                    name="review" 
                    required 
                    checked={data.review === "very_satisfied"}
                    onChange={(e) => updateFielHandler("review", e.target.value)}
                    />
                    <BsFillEmojiHeartEyesFill/>
                    <p>Muito sastifeito</p>
                </label>
            </div>
            <div className="form-control">
                <label htmlFor="comment">Coment??rio:</label>
                <textarea 
                name="comment" 
                id="comment" 
                placeholder='Conte como foi a sua experi??ncia com o produto...' 
                required
                value={data.comment || ""}
                onChange={(e) => updateFielHandler("comment", e.target.value)}
                ></textarea>
            </div>
        </div>
    )
}

export default ReviewForm