import { ClaudeChat } from '@/components/analysis/claude-chat'
import { DocumentViewer } from '@/components/analysis/document-viewer'
import { MarketData } from '@/components/analysis/market-data'

export default async function AnalysisPage({ params }: { params: { id: string } }) {
  // TODO: Fetch project data
  // TODO: Load documents
  // TODO: Initialize Claude chat session
  return (
    <div>
      <DocumentViewer />
      <ClaudeChat />
      <MarketData />
    </div>
  )
}