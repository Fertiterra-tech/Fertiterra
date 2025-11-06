"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Download, Share2, FileText, CalendarIcon, Shield } from "lucide-react"
import { format } from "date-fns"

type ExportOptions = {
  cycles: boolean
  symptoms: boolean
  medications: boolean
  goals: boolean
  appointments: boolean
}

export function DataExport() {
  const [exportOptions, setExportOptions] = useState<ExportOptions>({
    cycles: true,
    symptoms: true,
    medications: true,
    goals: false,
    appointments: false,
  })
  const [dateRange, setDateRange] = useState<{ from: Date | undefined; to: Date | undefined }>({
    from: new Date(new Date().setMonth(new Date().getMonth() - 6)),
    to: new Date(),
  })
  const [exportFormat, setExportFormat] = useState<string>("pdf")
  const [isExporting, setIsExporting] = useState(false)

  const handleExportOptionChange = (option: keyof ExportOptions, checked: boolean) => {
    setExportOptions((prev) => ({ ...prev, [option]: checked }))
  }

  const handleExport = async () => {
    setIsExporting(true)

    // Simulate export process
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // In a real app, this would generate and download the file
    const filename = `fertility-data-${format(new Date(), "yyyy-MM-dd")}.${exportFormat}`
    console.log(`Exporting ${filename} with options:`, exportOptions)

    setIsExporting(false)
  }

  const handleShareWithDoctor = async () => {
    // In a real app, this would create a secure sharing link
    const shareLink = `https://fertiterra.com/shared-data/${Date.now()}`
    navigator.clipboard.writeText(shareLink)
    alert("Secure sharing link copied to clipboard!")
  }

  const selectedOptionsCount = Object.values(exportOptions).filter(Boolean).length

  return (
    <div className="space-y-6">
      {/* Export Options */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export Your Data
          </CardTitle>
          <CardDescription>
            Download your health data for personal records or sharing with healthcare providers
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Data Types */}
          <div>
            <h4 className="font-medium mb-3">Select Data to Export</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cycles"
                  checked={exportOptions.cycles}
                  onCheckedChange={(checked) => handleExportOptionChange("cycles", checked as boolean)}
                />
                <label
                  htmlFor="cycles"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Menstrual Cycles & Fertility Data
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="symptoms"
                  checked={exportOptions.symptoms}
                  onCheckedChange={(checked) => handleExportOptionChange("symptoms", checked as boolean)}
                />
                <label
                  htmlFor="symptoms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Symptoms & Daily Logs
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="medications"
                  checked={exportOptions.medications}
                  onCheckedChange={(checked) => handleExportOptionChange("medications", checked as boolean)}
                />
                <label
                  htmlFor="medications"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Medications & Supplements
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="goals"
                  checked={exportOptions.goals}
                  onCheckedChange={(checked) => handleExportOptionChange("goals", checked as boolean)}
                />
                <label
                  htmlFor="goals"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Health Goals & Progress
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="appointments"
                  checked={exportOptions.appointments}
                  onCheckedChange={(checked) => handleExportOptionChange("appointments", checked as boolean)}
                />
                <label
                  htmlFor="appointments"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Appointments & Consultations
                </label>
              </div>
            </div>
          </div>

          {/* Date Range */}
          <div>
            <h4 className="font-medium mb-3">Date Range</h4>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {dateRange.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} - {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Pick a date range</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange.from}
                  selected={dateRange}
                  onSelect={(range) => setDateRange(range || { from: undefined, to: undefined })}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>

          {/* Export Format */}
          <div>
            <h4 className="font-medium mb-3">Export Format</h4>
            <Select value={exportFormat} onValueChange={setExportFormat}>
              <SelectTrigger>
                <SelectValue placeholder="Select format" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pdf">PDF Report</SelectItem>
                <SelectItem value="csv">CSV Spreadsheet</SelectItem>
                <SelectItem value="json">JSON Data</SelectItem>
                <SelectItem value="xlsx">Excel Workbook</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Export Summary */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium mb-2">Export Summary</h4>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• {selectedOptionsCount} data types selected</p>
              <p>
                • Date range:{" "}
                {dateRange.from && dateRange.to
                  ? `${format(dateRange.from, "MMM dd, yyyy")} - ${format(dateRange.to, "MMM dd, yyyy")}`
                  : "No date range selected"}
              </p>
              <p>• Format: {exportFormat.toUpperCase()}</p>
            </div>
          </div>

          {/* Export Button */}
          <Button onClick={handleExport} disabled={selectedOptionsCount === 0 || isExporting} className="w-full">
            {isExporting ? (
              <>
                <Download className="mr-2 h-4 w-4 animate-spin" />
                Generating Export...
              </>
            ) : (
              <>
                <Download className="mr-2 h-4 w-4" />
                Export Data
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Share with Healthcare Provider */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Share2 className="h-5 w-5" />
            Share with Healthcare Provider
          </CardTitle>
          <CardDescription>
            Generate a secure link to share your data with your doctor or fertility specialist
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
            <Shield className="h-5 w-5 text-blue-600 mt-0.5" />
            <div>
              <h4 className="font-medium text-blue-900">Secure & Private</h4>
              <p className="text-sm text-blue-700">
                Shared links are encrypted, expire after 30 days, and can be revoked at any time. Your data is never
                permanently stored on external servers.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <h4 className="font-medium mb-2">What will be shared:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Complete fertility cycle history</li>
                <li>• Symptom logs and patterns</li>
                <li>• Current medications and supplements</li>
                <li>• Test results and appointments</li>
              </ul>
            </div>
          </div>

          <Button onClick={handleShareWithDoctor} variant="outline" className="w-full">
            <Share2 className="mr-2 h-4 w-4" />
            Generate Secure Sharing Link
          </Button>
        </CardContent>
      </Card>

      {/* Data Privacy */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            Data Privacy & Rights
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="text-sm space-y-2">
            <p>
              <strong>Your data belongs to you.</strong> You have the right to export, share, or delete your health
              information at any time.
            </p>
            <p>
              All exports are encrypted and can include a complete history of your fertility tracking, making it easy to
              switch providers or maintain personal records.
            </p>
            <p>
              For questions about data privacy or to request complete data deletion, contact our privacy team at
              privacy@fertiterra.com.
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <Button variant="outline" size="sm">
              Privacy Policy
            </Button>
            <Button variant="outline" size="sm">
              Data Rights
            </Button>
            <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700">
              Delete All Data
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
