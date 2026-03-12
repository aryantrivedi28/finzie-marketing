import { PDFParse } from "pdf-parse"

export async function extractTextFromPDF(buffer: Buffer) {
  try {
    const parser = new PDFParse({ data: buffer })

    const result = await parser.getText()
    const text = result.text

    const lines = text.split("\n")

    // Extract headings
    const headings = lines.filter((line: string) => {
      const trimmed = line.trim()

      return (
        trimmed.length > 0 &&
        trimmed.length < 100 &&
        (
          /^[A-Z][A-Z\s]+$/.test(trimmed) ||
          /^[IVX]+\./.test(trimmed) ||
          /^\d+\.\s+[A-Z]/.test(trimmed) ||
          /^[A-Z].*:$/.test(trimmed)
        )
      )
    })

    // Extract bullet points
    const bulletPoints = lines.filter((line: string) =>
      /^[-•*]\s+/.test(line.trim()) ||
      /^\d+[\.\)]\s+/.test(line.trim())
    )

    // Extract metrics
    const metrics: string[] = []

    const metricPatterns = [
      /\b(\d+)\s*%\b/g,
      /\b(\d+)\s*(increase|decrease|growth|reduction|improvement)\b/gi,
      /\$\s*(\d+[,\d]*\.?\d*)/g,
      /\b(\d+)\s*(days|months|years|weeks|hours|minutes)\b/gi,
      /\b(\d+)\s*(users|customers|visitors|subscribers|downloads)\b/gi
    ]

    lines.forEach((line: string) => {
      metricPatterns.forEach(pattern => {
        const matches = line.match(pattern)
        if (matches) metrics.push(...matches)
      })
    })

    return {
      text,
      headings,
      bulletPoints,
      metrics: Array.from(new Set(metrics)),
      numPages: result.pages ?? null // safer
    }

  } catch (error) {
    throw new Error(`PDF extraction failed: ${error}`)
  }
}