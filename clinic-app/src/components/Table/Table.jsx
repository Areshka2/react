import React from 'react'

import cn from 'classname'
import PropTypes from 'prop-types'
import BootstrapTable from 'react-bootstrap-table-next'

import './Table.scss'

const NO_DATA_TEXT = 'Данных нет';

const Table = (
  {
    data,
    columns,
    keyField,
    expandRow,
    className,
    containerClass,
    isStriped,
    hasBorders,
    hasHover,
    noDataText,
    ...props
  }
) => {

  const getRowStyle = (row, rowIndex) => {
    return props.getRowStyle(row, rowIndex)
  }

  return (
    <div className={cn('table-container', containerClass)}>
      <BootstrapTable
        expandRow={expandRow}
        data={data}
        columns={columns}
        keyField={keyField}
        classes={cn('table', className)}
        headerClasses={'table__header'}
        striped={isStriped}
        hover={hasHover}
        bordered={hasBorders}
        rowStyle={getRowStyle}
        noDataIndication={noDataText}
      />
    </div>
  )
}

export default Table;

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object), // дескрипторы столбцов таблицы
  data: PropTypes.arrayOf(PropTypes.object), // данные таблицы
  keyField: PropTypes.string, // имя уникального столбца
  noDataText: PropTypes.string,

  hasHover: PropTypes.bool,
  hasOptions: PropTypes.bool,
  hasBorders: PropTypes.bool,

  isStriped: PropTypes.bool,

  expandRow: PropTypes.object,

  className: PropTypes.string,
  containerClass: PropTypes.string,

  getRowStyle: PropTypes.func
}

Table.defaultProps = {
  data: [],
  columns: [],
  keyField: 'id',
  noDataText: NO_DATA_TEXT,

  isRemote: true,
  isStriped: true,
  isLoading: false,

  hasHover: false,
  hasHeader: false,
  hasBorders: false,

  getRowStyle: function () { return null }
}


