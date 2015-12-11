import React, { PropTypes, Component } from 'react';
import ClassNames from 'classnames/bind';
import style from './style.css';

const cx = ClassNames.bind(style);

class Media extends Component {
  render () {
    const { aspectRatio, children, className, color, contentOverlay, image, ...other } = this.props;
    let classes = cx({
      wide: aspectRatio == 'wide',
      square: aspectRatio == 'square'
    });

	if (className) classes += ` ${className}`;

	let innerClass = cx({
	  content: true
	});

    const bgStyle = {
      backgroundImage: typeof image === 'string' ? `url('${image}')` : undefined
    };

    return (
      <div style={bgStyle} className={classes} {...other}>
        <div className={innerClass}>
          {children}
        </div>
      </div>
    );
  }
}

Media.propTypes = {
	aspectRatio: PropTypes.oneOf([ 'wide', 'square' ]),
	children: PropTypes.any,
	className: PropTypes.string,
	color: PropTypes.string,
	contentOverlay: PropTypes.bool,
	image: PropTypes.oneOfType([
	  PropTypes.string,
	  PropTypes.element
	])
};

export default Media;