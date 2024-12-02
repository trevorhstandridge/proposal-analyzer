'use client'

import { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

export function UploadZone() {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    // TODO: Handle file upload
    // TODO: Process documents
    // TODO: Update project state
  }, [])

  const { getRootProps, getInputProps } = useDropzone({ onDrop })

  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      {/* Upload interface will go here */}
    </div>
  )
}