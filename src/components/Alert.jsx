import PropTypes from 'prop-types'

const Alert = (props) => {

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  return (
    props.alert && (
      <div className="container" style={{position: 'relative'}}>
        <div className={`alert alert-sm alert-${props.alert.type} alert-dismissible fade show`} role="alert"
          style={{position: 'fixed', top: '12px', right: '12px'}}>
          <strong>{capitalize(props.alert.type)}</strong> {props.alert.message}
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
      </div>
    ))
}

Alert.propTypes = {
  alert: PropTypes.object
}

export default Alert