import { useState } from 'react';
import PropTypes from 'prop-types';

const TextForm = (props) => {
  const [text, setText] = useState("");

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  const showDefaultAlert = () => {
    props.showAlert("Please enter some text!", "warning");
  }

  const handleUpperCaseClick = () => {
    if (text !== "") {
      setText(text.toUpperCase());
      props.showAlert("CONVERTED TO UPPER CASE", "success");
    } else {
      showDefaultAlert();
    }
  }

  const handleLowerCaseClick = () => {
    if (text !== "") {
      setText(text.toLowerCase());
      props.showAlert("converted to lower case", "success");
    } else {
      showDefaultAlert();
    }
  }

  const handleTitleCaseClick = () => {
    if (text !== '') {
      let words = text.split(' ');

      words = words.map(word => {
        return capitalize(word);
      });

      setText(words.join(' '));
      props.showAlert("Converted To Title Case", "success");
    } else {
      showDefaultAlert();
    }
  }

  const handleSentenceCaseClick = () => {
    if (text !== "") {
      let words = capitalize(text).split(' '); // capitalizing the first word
      let capitalizeNext = false;

      words = words.map(word => {
        if (word !== "" && capitalizeNext) {
          word = capitalize(word);
          capitalizeNext = false;
        }
        if (word.charAt(word.length - 1) === '.'
          || word.charAt(word.length - 1) === '?'
          || word.charAt(word.length - 1) === '!'
        ) {
          capitalizeNext = true;
        }
        return word;
      });

      setText(words.join(' '));
      props.showAlert("Converted to sentence case", "success");
    } else {
      showDefaultAlert();
    }
  }

  const handleRemoveExtraSpacesClick = () => {
    if (text !== "") {
      const words = text.split(/[ ]+/);
      setText(words.join(' '));
      props.showAlert("Extra spaces are removed", "success");
    } else {
      showDefaultAlert();
    }
  }

  const handleCopyClick = () => {
    if (text !== "") {
      navigator.clipboard.writeText(text)
        .then(() => {
          props.showAlert("Text copied!", "success");
        })
        .catch(() => {
          props.showAlert("something went wrong!", "danger");
        });
    } else {
      showDefaultAlert();
    }
  }

  const handleClearClick = () => {
    if (text !== "") {
      setText("");
      props.showAlert("Text cleared", "success");
    } else {
      props.showAlert("Text is already clear", "info");
    }
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const numOfWords = () => {
    const words = text.split(' ');
    let count = 0;
    words.forEach(w => w !== '' && count++)
    return count;
  }

  const minutesToRead = () => {
    return 0.008 * numOfWords();
  }

  return (
    <>
      <div className='container my-3'>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" id="text" rows="10" 
            placeholder='Enter some text here' value={text} onChange={handleOnChange}
          />
        </div>
        <button className="btn btn-primary m-1" onClick={handleUpperCaseClick}>
          UPPER CASE
        </button>
        <button className="btn btn-primary m-1" onClick={handleLowerCaseClick}>
          lower case
        </button>
        <button className="btn btn-primary m-1" onClick={handleTitleCaseClick}>
          Title Case
        </button>
        <button className="btn btn-primary m-1" onClick={handleSentenceCaseClick}>
          Sentence case
        </button>
        <button className="btn btn-primary m-1" onClick={handleRemoveExtraSpacesClick}>
          Remove Extra Spaces
        </button>
        <button className="btn btn-primary m-1" onClick={handleCopyClick}>
          Copy Text
        </button>
        <button className="btn btn-primary m-1" onClick={handleClearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-3">
        <h3>Your Text Summary</h3>
        <div>{numOfWords()} words, {text.length} characters</div>
        <div>{minutesToRead()} Minutes to read</div>
      </div>
      <div className="container my-3">
        <h3>Preview</h3>
        <div>{text}</div>
      </div>
    </>
  )
}

TextForm.propTypes = {
  heading: PropTypes.string,
  showAlert: PropTypes.func,
}

export default TextForm