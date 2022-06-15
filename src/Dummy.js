import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
  value: state.inputReducer.value,
  dummy: state.inputReducer.dummy
});

const Dummy = ({ value, dummy }) => {
  return <p>{`${value} ${dummy}`}</p>
};

export default connect(mapStateToProps, null)(Dummy)
