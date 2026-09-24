# Plot status update procedure

1. Receive the current status list from Surrendra or the approved business source.
2. Verify each record against `src/data/neelbad-plots.ts` and the approved CAD/source plan.
3. Set only `available`, `reserved`, or `sold` statuses that have an approval date; otherwise retain `unknown`.
4. Update `statusUpdatedAt` for every changed record and preview the Neelbad page.
5. Test the plot list, selected plot sheet, deep link, WhatsApp context, and comparison state for every changed plot.
6. Obtain release approval, deploy, and record the date in `CONTENT_SOURCES.md`.

Never infer availability from the absence of a sale notice. Never make a public inventory-count statement unless the complete canonical data has been updated and approved.
