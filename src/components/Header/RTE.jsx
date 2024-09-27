import React from "react";
import {Controller} from 'react-hook-form'
import {Editor} from '@tinymce/tinymce-react'

function RTE({
    name, control, label, defaultValue = ""
}) {
  return (
    <div className="w-full">
        {
            label && <label className='inline-block mb-1 pl-1'>{label}</label>
        }
        <Controller />
    </div>
  )
}

export default RTE