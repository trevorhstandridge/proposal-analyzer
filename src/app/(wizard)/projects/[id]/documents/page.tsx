import { UploadZone } from '@/components/documents/upload-zone'

export default function DocumentsPage({ params }: { params: { id: string } }) {
  return (
    <div>
      <h1>Upload Documents</h1>
      <UploadZone />
      {/* TODO: Add document list */}
    </div>
  )
}