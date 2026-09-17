# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: ui/accessibility.spec.ts >> Homepage has no critical or serious accessibility violations
- Location: src/tests/ui/accessibility.spec.ts:4:5

# Error details

```
Error: [
  {
    "id": "aria-command-name",
    "impact": "serious",
    "tags": [
      "cat.aria",
      "wcag2a",
      "wcag412",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.4.1.2",
      "ACT",
      "RGAAv4",
      "RGAA-11.9.1"
    ],
    "description": "Ensure every ARIA button, link and menuitem has an accessible name",
    "help": "ARIA commands must have an accessible name",
    "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/aria-command-name?application=playwright",
    "nodes": [
      {
        "any": [
          {
            "id": "has-visible-text",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element does not have text that is visible to screen readers"
          },
          {
            "id": "aria-label",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-label attribute does not exist or is empty"
          },
          {
            "id": "aria-labelledby",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
          },
          {
            "id": "non-empty-title",
            "data": {
              "messageKey": "noAttr"
            },
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element has no title attribute"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<div id=\"cbb\" class=\"cbb\" tabindex=\"0\" role=\"button\">",
        "target": [
          "#aswift_4",
          "#cbb"
        ],
        "failureSummary": "Fix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
      }
    ]
  },
  {
    "id": "button-name",
    "impact": "critical",
    "tags": [
      "cat.name-role-value",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.a",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.4.1.2",
      "ACT",
      "RGAAv4",
      "RGAA-11.9.1"
    ],
    "description": "Ensure buttons have discernible text",
    "help": "Buttons must have discernible text",
    "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright",
    "nodes": [
      {
        "any": [
          {
            "id": "button-has-visible-text",
            "data": null,
            "relatedNodes": [],
            "impact": "critical",
            "message": "Element does not have inner text that is visible to screen readers"
          },
          {
            "id": "aria-label",
            "data": null,
            "relatedNodes": [],
            "impact": "critical",
            "message": "aria-label attribute does not exist or is empty"
          },
          {
            "id": "aria-labelledby",
            "data": null,
            "relatedNodes": [],
            "impact": "critical",
            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
          },
          {
            "id": "non-empty-title",
            "data": {
              "messageKey": "noAttr"
            },
            "relatedNodes": [],
            "impact": "critical",
            "message": "Element has no title attribute"
          },
          {
            "id": "implicit-label",
            "data": null,
            "relatedNodes": [],
            "impact": "critical",
            "message": "Element does not have an implicit (wrapped) <label>"
          },
          {
            "id": "explicit-label",
            "data": null,
            "relatedNodes": [],
            "impact": "critical",
            "message": "Element does not have an explicit <label>"
          },
          {
            "id": "presentational-role",
            "data": null,
            "relatedNodes": [],
            "impact": "critical",
            "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\""
          }
        ],
        "all": [],
        "none": [],
        "impact": "critical",
        "html": "<button type=\"submit\" id=\"subscribe\" class=\"btn btn-default\"><i class=\"fa fa-arrow-circle-o-right\"></i></button>",
        "target": [
          "#subscribe"
        ],
        "failureSummary": "Fix any of the following:\n  Element does not have inner text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute\n  Element does not have an implicit (wrapped) <label>\n  Element does not have an explicit <label>\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\""
      }
    ]
  },
  {
    "id": "color-contrast",
    "impact": "serious",
    "tags": [
      "cat.color",
      "wcag2aa",
      "wcag143",
      "TTv5",
      "TT13.c",
      "EN-301-549",
      "EN-9.1.4.3",
      "ACT",
      "RGAAv4",
      "RGAA-3.2.1"
    ],
    "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
    "help": "Elements must meet minimum color contrast ratio thresholds",
    "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright",
    "nodes": [
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#ffa500",
              "bgColor": "#ffffff",
              "contrastRatio": 1.97,
              "fontSize": "10.5pt (14px)",
              "fontWeight": "normal",
              "messageKey": null,
              "expectedContrastRatio": "4.5:1"
            },
            "relatedNodes": [
              {
                "html": "<a href=\"/\" style=\"color: orange;\"><i class=\"fa fa-home\"></i> Home</a>",
                "target": [
                  "li:nth-child(1) > a[href=\"/\"]"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 1.97 (foreground color: #ffa500, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<a href=\"/\" style=\"color: orange;\"><i class=\"fa fa-home\"></i> Home</a>",
        "target": [
          "li:nth-child(1) > a[href=\"/\"]"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 1.97 (foreground color: #ffa500, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 500</h2>",
        "target": [
          ".features_items > .col-sm-4:nth-child(3) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 400</h2>",
        "target": [
          ".col-sm-4:nth-child(4) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#428bca",
              "bgColor": "#ffffff",
              "contrastRatio": 3.63,
              "fontSize": "10.5pt (14px)",
              "fontWeight": "normal",
              "messageKey": null,
              "expectedContrastRatio": "4.5:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<span class=\"google-anno-t\" style=\"color-scheme: initia...\">",
        "target": [
          ".col-sm-4:nth-child(4) > .product-image-wrapper > .single-products > .productinfo.text-center > p > .google-anno[href=\"#\"][data-google-vignette=\"false\"] > .google-anno-t"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1000</h2>",
        "target": [
          ".col-sm-4:nth-child(5) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1500</h2>",
        "target": [
          ".col-sm-4:nth-child(6) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 600</h2>",
        "target": [
          ".col-sm-4:nth-child(7) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 400</h2>",
        "target": [
          ".col-sm-4:nth-child(8) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1000</h2>",
        "target": [
          ".col-sm-4:nth-child(9) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 700</h2>",
        "target": [
          ".col-sm-4:nth-child(10) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 499</h2>",
        "target": [
          ".col-sm-4:nth-child(11) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 359</h2>",
        "target": [
          ".col-sm-4:nth-child(12) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 278</h2>",
        "target": [
          ".col-sm-4:nth-child(13) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 679</h2>",
        "target": [
          ".col-sm-4:nth-child(14) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 315</h2>",
        "target": [
          ".col-sm-4:nth-child(15) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 478</h2>",
        "target": [
          ".col-sm-4:nth-child(16) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1200</h2>",
        "target": [
          ".col-sm-4:nth-child(17) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1050</h2>",
        "target": [
          ".col-sm-4:nth-child(18) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1190</h2>",
        "target": [
          ".col-sm-4:nth-child(19) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1530</h2>",
        "target": [
          ".col-sm-4:nth-child(20) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1600</h2>",
        "target": [
          ".col-sm-4:nth-child(21) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1100</h2>",
        "target": [
          ".col-sm-4:nth-child(22) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 849</h2>",
        "target": [
          ".col-sm-4:nth-child(23) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1299</h2>",
        "target": [
          ".col-sm-4:nth-child(24) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#428bca",
              "bgColor": "#ffffff",
              "contrastRatio": 3.63,
              "fontSize": "10.5pt (14px)",
              "fontWeight": "normal",
              "messageKey": null,
              "expectedContrastRatio": "4.5:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<span class=\"google-anno-t\" style=\"color-scheme: initia...\">",
        "target": [
          ".col-sm-4:nth-child(24) > .product-image-wrapper > .single-products > .productinfo.text-center > p > .google-anno[href=\"#\"][data-google-vignette=\"false\"] > .google-anno-t"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1000</h2>",
        "target": [
          ".col-sm-4:nth-child(25) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1500</h2>",
        "target": [
          ".col-sm-4:nth-child(26) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#428bca",
              "bgColor": "#ffffff",
              "contrastRatio": 3.63,
              "fontSize": "10.5pt (14px)",
              "fontWeight": "normal",
              "messageKey": null,
              "expectedContrastRatio": "4.5:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<span class=\"google-anno-t\" style=\"color-scheme: initia...\">",
        "target": [
          ".col-sm-4:nth-child(26) > .product-image-wrapper > .single-products > .productinfo.text-center > p > .google-anno[href=\"#\"][data-google-vignette=\"false\"] > .google-anno-t"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 850</h2>",
        "target": [
          ".col-sm-4:nth-child(27) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 799</h2>",
        "target": [
          ".col-sm-4:nth-child(28) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1200</h2>",
        "target": [
          ".col-sm-4:nth-child(29) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1400</h2>",
        "target": [
          ".col-sm-4:nth-child(30) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 2300</h2>",
        "target": [
          ".col-sm-4:nth-child(31) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 3000</h2>",
        "target": [
          ".col-sm-4:nth-child(32) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 3500</h2>",
        "target": [
          ".col-sm-4:nth-child(33) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 5000</h2>",
        "target": [
          ".col-sm-4:nth-child(34) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1400</h2>",
        "target": [
          ".col-sm-4:nth-child(35) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1389</h2>",
        "target": [
          ".col-sm-4:nth-child(36) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 1500</h2>",
        "target": [
          ".active.item > .col-sm-4:nth-child(1) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 600</h2>",
        "target": [
          ".active.item > .col-sm-4:nth-child(2) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#fe980f",
              "bgColor": "#ffffff",
              "contrastRatio": 2.16,
              "fontSize": "18.0pt (24px)",
              "fontWeight": "bold",
              "messageKey": null,
              "expectedContrastRatio": "3:1"
            },
            "relatedNodes": [
              {
                "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
                "target": [
                  "body"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<h2>Rs. 400</h2>",
        "target": [
          ".active.item > .col-sm-4:nth-child(3) > .product-image-wrapper > .single-products > .productinfo.text-center > h2"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1"
      },
      {
        "any": [
          {
            "id": "color-contrast",
            "data": {
              "fgColor": "#999999",
              "bgColor": "#ffffff",
              "contrastRatio": 2.84,
              "fontSize": "16.1pt (21.4px)",
              "fontWeight": "normal",
              "messageKey": null,
              "expectedContrastRatio": "4.5:1"
            },
            "relatedNodes": [
              {
                "html": "<div class=\"ns-867i9-e-1 row-container canvas flex-filler\">",
                "target": [
                  "#aswift_4",
                  ".ns-867i9-e-1"
                ]
              }
            ],
            "impact": "serious",
            "message": "Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 16.1pt (21.4px), font weight: normal). Expected contrast ratio of 4.5:1"
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<a class=\"ns-867i9-e-10\" data-asoch-targets=\"ad0,urlClk\" dir=\"auto\" href=\"https://googleads.g....\" target=\"_top\">",
        "target": [
          "#aswift_4",
          ".ns-867i9-e-10"
        ],
        "failureSummary": "Fix any of the following:\n  Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 16.1pt (21.4px), font weight: normal). Expected contrast ratio of 4.5:1"
      }
    ]
  },
  {
    "id": "frame-title",
    "impact": "serious",
    "tags": [
      "cat.text-alternatives",
      "wcag2a",
      "wcag412",
      "section508",
      "section508.22.i",
      "TTv5",
      "TT12.d",
      "EN-301-549",
      "EN-9.4.1.2",
      "RGAAv4",
      "RGAA-2.1.1"
    ],
    "description": "Ensure <iframe> and <frame> elements have an accessible name",
    "help": "Frames must have an accessible name",
    "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright",
    "nodes": [
      {
        "any": [
          {
            "id": "non-empty-title",
            "data": {
              "messageKey": "noAttr"
            },
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element has no title attribute"
          },
          {
            "id": "aria-label",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-label attribute does not exist or is empty"
          },
          {
            "id": "aria-labelledby",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
          },
          {
            "id": "presentational-role",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\""
          }
        ],
        "all": [],
        "none": [],
        "impact": "serious",
        "html": "<iframe frameborder=\"0\" style=\"height: 0px; width: 0px; position: absolute;\"></iframe>",
        "target": [
          "#aswift_4",
          "iframe:nth-child(29)"
        ],
        "failureSummary": "Fix any of the following:\n  Element has no title attribute\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element's default semantics were not overridden with role=\"none\" or role=\"presentation\""
      }
    ]
  },
  {
    "id": "link-name",
    "impact": "serious",
    "tags": [
      "cat.name-role-value",
      "wcag2a",
      "wcag244",
      "wcag412",
      "section508",
      "section508.22.a",
      "TTv5",
      "TT6.a",
      "EN-301-549",
      "EN-9.2.4.4",
      "EN-9.4.1.2",
      "ACT",
      "RGAAv4",
      "RGAA-6.2.1"
    ],
    "description": "Ensure links have discernible text",
    "help": "Links must have discernible text",
    "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright",
    "nodes": [
      {
        "any": [
          {
            "id": "has-visible-text",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element does not have text that is visible to screen readers"
          },
          {
            "id": "aria-label",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-label attribute does not exist or is empty"
          },
          {
            "id": "aria-labelledby",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
          },
          {
            "id": "non-empty-title",
            "data": {
              "messageKey": "noAttr"
            },
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element has no title attribute"
          }
        ],
        "all": [],
        "none": [
          {
            "id": "focusable-no-name",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element is in tab order and does not have accessible text"
          }
        ],
        "impact": "serious",
        "html": "<a href=\"#slider-carousel\" class=\"left control-carousel hidden-xs\" data-slide=\"prev\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t\t\t\t</a>",
        "target": [
          ".left.control-carousel.hidden-xs"
        ],
        "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
      },
      {
        "any": [
          {
            "id": "has-visible-text",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element does not have text that is visible to screen readers"
          },
          {
            "id": "aria-label",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-label attribute does not exist or is empty"
          },
          {
            "id": "aria-labelledby",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
          },
          {
            "id": "non-empty-title",
            "data": {
              "messageKey": "noAttr"
            },
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element has no title attribute"
          }
        ],
        "all": [],
        "none": [
          {
            "id": "focusable-no-name",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element is in tab order and does not have accessible text"
          }
        ],
        "impact": "serious",
        "html": "<a href=\"#slider-carousel\" class=\"right control-carousel hidden-xs\" data-slide=\"next\">\n\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t\t\t\t</a>",
        "target": [
          ".right.control-carousel.hidden-xs"
        ],
        "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
      },
      {
        "any": [
          {
            "id": "has-visible-text",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element does not have text that is visible to screen readers"
          },
          {
            "id": "aria-label",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-label attribute does not exist or is empty"
          },
          {
            "id": "aria-labelledby",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
          },
          {
            "id": "non-empty-title",
            "data": {
              "messageKey": "noAttr"
            },
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element has no title attribute"
          }
        ],
        "all": [],
        "none": [
          {
            "id": "focusable-no-name",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element is in tab order and does not have accessible text"
          }
        ],
        "impact": "serious",
        "html": "<a class=\"left recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"prev\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-left\"></i>\n\t\t\t\t\t\t\t  </a>",
        "target": [
          ".left.recommended-item-control[href=\"#recommended-item-carousel\"]"
        ],
        "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
      },
      {
        "any": [
          {
            "id": "has-visible-text",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element does not have text that is visible to screen readers"
          },
          {
            "id": "aria-label",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-label attribute does not exist or is empty"
          },
          {
            "id": "aria-labelledby",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty"
          },
          {
            "id": "non-empty-title",
            "data": {
              "messageKey": "noAttr"
            },
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element has no title attribute"
          }
        ],
        "all": [],
        "none": [
          {
            "id": "focusable-no-name",
            "data": null,
            "relatedNodes": [],
            "impact": "serious",
            "message": "Element is in tab order and does not have accessible text"
          }
        ],
        "impact": "serious",
        "html": "<a class=\"right recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"next\">\n\t\t\t\t\t\t\t\t<i class=\"fa fa-angle-right\"></i>\n\t\t\t\t\t\t\t  </a>",
        "target": [
          ".right.recommended-item-control[href=\"#recommended-item-carousel\"]"
        ],
        "failureSummary": "Fix all of the following:\n  Element is in tab order and does not have accessible text\n\nFix any of the following:\n  Element does not have text that is visible to screen readers\n  aria-label attribute does not exist or is empty\n  aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty\n  Element has no title attribute"
      }
    ]
  }
]

expect(received).toEqual(expected) // deep equality

- Expected  -    1
+ Received  + 1986

- Array []
+ Array [
+   Object {
+     "description": "Ensure every ARIA button, link and menuitem has an accessible name",
+     "help": "ARIA commands must have an accessible name",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/aria-command-name?application=playwright",
+     "id": "aria-command-name",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<div id=\"cbb\" class=\"cbb\" tabindex=\"0\" role=\"button\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#aswift_4",
+           "#cbb",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.aria",
+       "wcag2a",
+       "wcag412",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.9.1",
+     ],
+   },
+   Object {
+     "description": "Ensure buttons have discernible text",
+     "help": "Buttons must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/button-name?application=playwright",
+     "id": "button-name",
+     "impact": "critical",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "button-has-visible-text",
+             "impact": "critical",
+             "message": "Element does not have inner text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "critical",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "critical",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "critical",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "implicit-label",
+             "impact": "critical",
+             "message": "Element does not have an implicit (wrapped) <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "explicit-label",
+             "impact": "critical",
+             "message": "Element does not have an explicit <label>",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "critical",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element does not have inner text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute
+   Element does not have an implicit (wrapped) <label>
+   Element does not have an explicit <label>
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<button type=\"submit\" id=\"subscribe\" class=\"btn btn-default\"><i class=\"fa fa-arrow-circle-o-right\"></i></button>",
+         "impact": "critical",
+         "none": Array [],
+         "target": Array [
+           "#subscribe",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-11.9.1",
+     ],
+   },
+   Object {
+     "description": "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds",
+     "help": "Elements must meet minimum color contrast ratio thresholds",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/color-contrast?application=playwright",
+     "id": "color-contrast",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 1.97,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#ffa500",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 1.97 (foreground color: #ffa500, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<a href=\"/\" style=\"color: orange;\"><i class=\"fa fa-home\"></i> Home</a>",
+                 "target": Array [
+                   "li:nth-child(1) > a[href=\"/\"]",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 1.97 (foreground color: #ffa500, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a href=\"/\" style=\"color: orange;\"><i class=\"fa fa-home\"></i> Home</a>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "li:nth-child(1) > a[href=\"/\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 500</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".features_items > .col-sm-4:nth-child(3) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 400</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(4) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#428bca",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"google-anno-t\" style=\"color-scheme: initia...\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(4) > .product-image-wrapper > .single-products > .productinfo.text-center > p > .google-anno[href=\"#\"][data-google-vignette=\"false\"] > .google-anno-t",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1000</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(5) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1500</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(6) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 600</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(7) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 400</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(8) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1000</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(9) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 700</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(10) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 499</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(11) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 359</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(12) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 278</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(13) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 679</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(14) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 315</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(15) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 478</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(16) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1200</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(17) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1050</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(18) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1190</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(19) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1530</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(20) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1600</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(21) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1100</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(22) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 849</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(23) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1299</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(24) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#428bca",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"google-anno-t\" style=\"color-scheme: initia...\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(24) > .product-image-wrapper > .single-products > .productinfo.text-center > p > .google-anno[href=\"#\"][data-google-vignette=\"false\"] > .google-anno-t",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1000</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(25) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1500</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(26) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 3.63,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#428bca",
+               "fontSize": "10.5pt (14px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 3.63 (foreground color: #428bca, background color: #ffffff, font size: 10.5pt (14px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<span class=\"google-anno-t\" style=\"color-scheme: initia...\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(26) > .product-image-wrapper > .single-products > .productinfo.text-center > p > .google-anno[href=\"#\"][data-google-vignette=\"false\"] > .google-anno-t",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 850</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(27) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 799</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(28) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1200</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(29) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1400</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(30) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 2300</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(31) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 3000</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(32) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 3500</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(33) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 5000</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(34) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1400</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(35) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1389</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".col-sm-4:nth-child(36) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 1500</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".active.item > .col-sm-4:nth-child(1) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 600</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".active.item > .col-sm-4:nth-child(2) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.16,
+               "expectedContrastRatio": "3:1",
+               "fgColor": "#fe980f",
+               "fontSize": "18.0pt (24px)",
+               "fontWeight": "bold",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<body aria-hidden=\"false\" style=\"padding: 0px 0px 154px;\">",
+                 "target": Array [
+                   "body",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.16 (foreground color: #fe980f, background color: #ffffff, font size: 18.0pt (24px), font weight: bold). Expected contrast ratio of 3:1",
+         "html": "<h2>Rs. 400</h2>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           ".active.item > .col-sm-4:nth-child(3) > .product-image-wrapper > .single-products > .productinfo.text-center > h2",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "bgColor": "#ffffff",
+               "contrastRatio": 2.84,
+               "expectedContrastRatio": "4.5:1",
+               "fgColor": "#999999",
+               "fontSize": "16.1pt (21.4px)",
+               "fontWeight": "normal",
+               "messageKey": null,
+             },
+             "id": "color-contrast",
+             "impact": "serious",
+             "message": "Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 16.1pt (21.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+             "relatedNodes": Array [
+               Object {
+                 "html": "<div class=\"ns-867i9-e-1 row-container canvas flex-filler\">",
+                 "target": Array [
+                   "#aswift_4",
+                   ".ns-867i9-e-1",
+                 ],
+               },
+             ],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has insufficient color contrast of 2.84 (foreground color: #999999, background color: #ffffff, font size: 16.1pt (21.4px), font weight: normal). Expected contrast ratio of 4.5:1",
+         "html": "<a class=\"ns-867i9-e-10\" data-asoch-targets=\"ad0,urlClk\" dir=\"auto\" href=\"https://googleads.g....\" target=\"_top\">",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#aswift_4",
+           ".ns-867i9-e-10",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.color",
+       "wcag2aa",
+       "wcag143",
+       "TTv5",
+       "TT13.c",
+       "EN-301-549",
+       "EN-9.1.4.3",
+       "ACT",
+       "RGAAv4",
+       "RGAA-3.2.1",
+     ],
+   },
+   Object {
+     "description": "Ensure <iframe> and <frame> elements have an accessible name",
+     "help": "Frames must have an accessible name",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/frame-title?application=playwright",
+     "id": "frame-title",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "presentational-role",
+             "impact": "serious",
+             "message": "Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix any of the following:
+   Element has no title attribute
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element's default semantics were not overridden with role=\"none\" or role=\"presentation\"",
+         "html": "<iframe frameborder=\"0\" style=\"height: 0px; width: 0px; position: absolute;\"></iframe>",
+         "impact": "serious",
+         "none": Array [],
+         "target": Array [
+           "#aswift_4",
+           "iframe:nth-child(29)",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.text-alternatives",
+       "wcag2a",
+       "wcag412",
+       "section508",
+       "section508.22.i",
+       "TTv5",
+       "TT12.d",
+       "EN-301-549",
+       "EN-9.4.1.2",
+       "RGAAv4",
+       "RGAA-2.1.1",
+     ],
+   },
+   Object {
+     "description": "Ensure links have discernible text",
+     "help": "Links must have discernible text",
+     "helpUrl": "https://dequeuniversity.com/rules/axe/4.13/link-name?application=playwright",
+     "id": "link-name",
+     "impact": "serious",
+     "nodes": Array [
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix all of the following:
+   Element is in tab order and does not have accessible text
+
+ Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<a href=\"#slider-carousel\" class=\"left control-carousel hidden-xs\" data-slide=\"prev\">
+ 							<i class=\"fa fa-angle-left\"></i>
+ 						</a>",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": null,
+             "id": "focusable-no-name",
+             "impact": "serious",
+             "message": "Element is in tab order and does not have accessible text",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           ".left.control-carousel.hidden-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix all of the following:
+   Element is in tab order and does not have accessible text
+
+ Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<a href=\"#slider-carousel\" class=\"right control-carousel hidden-xs\" data-slide=\"next\">
+ 							<i class=\"fa fa-angle-right\"></i>
+ 						</a>",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": null,
+             "id": "focusable-no-name",
+             "impact": "serious",
+             "message": "Element is in tab order and does not have accessible text",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           ".right.control-carousel.hidden-xs",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix all of the following:
+   Element is in tab order and does not have accessible text
+
+ Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<a class=\"left recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"prev\">
+ 								<i class=\"fa fa-angle-left\"></i>
+ 							  </a>",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": null,
+             "id": "focusable-no-name",
+             "impact": "serious",
+             "message": "Element is in tab order and does not have accessible text",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           ".left.recommended-item-control[href=\"#recommended-item-carousel\"]",
+         ],
+       },
+       Object {
+         "all": Array [],
+         "any": Array [
+           Object {
+             "data": null,
+             "id": "has-visible-text",
+             "impact": "serious",
+             "message": "Element does not have text that is visible to screen readers",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-label",
+             "impact": "serious",
+             "message": "aria-label attribute does not exist or is empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": null,
+             "id": "aria-labelledby",
+             "impact": "serious",
+             "message": "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty",
+             "relatedNodes": Array [],
+           },
+           Object {
+             "data": Object {
+               "messageKey": "noAttr",
+             },
+             "id": "non-empty-title",
+             "impact": "serious",
+             "message": "Element has no title attribute",
+             "relatedNodes": Array [],
+           },
+         ],
+         "failureSummary": "Fix all of the following:
+   Element is in tab order and does not have accessible text
+
+ Fix any of the following:
+   Element does not have text that is visible to screen readers
+   aria-label attribute does not exist or is empty
+   aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty
+   Element has no title attribute",
+         "html": "<a class=\"right recommended-item-control\" href=\"#recommended-item-carousel\" data-slide=\"next\">
+ 								<i class=\"fa fa-angle-right\"></i>
+ 							  </a>",
+         "impact": "serious",
+         "none": Array [
+           Object {
+             "data": null,
+             "id": "focusable-no-name",
+             "impact": "serious",
+             "message": "Element is in tab order and does not have accessible text",
+             "relatedNodes": Array [],
+           },
+         ],
+         "target": Array [
+           ".right.recommended-item-control[href=\"#recommended-item-carousel\"]",
+         ],
+       },
+     ],
+     "tags": Array [
+       "cat.name-role-value",
+       "wcag2a",
+       "wcag244",
+       "wcag412",
+       "section508",
+       "section508.22.a",
+       "TTv5",
+       "TT6.a",
+       "EN-301-549",
+       "EN-9.2.4.4",
+       "EN-9.4.1.2",
+       "ACT",
+       "RGAAv4",
+       "RGAA-6.2.1",
+     ],
+   },
+ ]
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - banner [ref=e2]:
    - generic [ref=e5]:
      - link [ref=e8] [cursor=pointer]:
        - /url: /
        - img "Website for automation practice" [ref=e9]
      - list [ref=e12]:
        - listitem [ref=e13]:
          - link " Home" [ref=e14] [cursor=pointer]:
            - /url: /
            - generic [ref=e15]: 
            - text: Home
        - listitem [ref=e16]:
          - link " Products" [ref=e17] [cursor=pointer]:
            - /url: /products
            - generic [ref=e18]: 
            - text: Products
        - listitem [ref=e19]:
          - link " Cart" [ref=e20] [cursor=pointer]:
            - /url: /view_cart
            - generic [ref=e21]: 
            - text: Cart
        - listitem [ref=e22]:
          - link " Signup / Login" [ref=e23] [cursor=pointer]:
            - /url: /login
            - generic [ref=e24]: 
            - text: Signup / Login
        - listitem [ref=e25]:
          - link " Test Cases" [ref=e26] [cursor=pointer]:
            - /url: /test_cases
            - generic [ref=e27]: 
            - text: Test Cases
        - listitem [ref=e28]:
          - link " API Testing" [ref=e29] [cursor=pointer]:
            - /url: /api_list
            - generic [ref=e30]: 
            - text: API Testing
        - listitem [ref=e31]:
          - link " Video Tutorials" [ref=e32] [cursor=pointer]:
            - /url: https://www.youtube.com/c/AutomationExercise
            - generic [ref=e33]: 
            - text: Video Tutorials
        - listitem [ref=e34]:
          - link " Contact us" [ref=e35] [cursor=pointer]:
            - /url: /contact_us
            - generic [ref=e36]: 
            - text: Contact us
  - generic [ref=e41]:
    - list [ref=e42]:
      - listitem [ref=e43] [cursor=pointer]
      - listitem [ref=e44] [cursor=pointer]
      - listitem [ref=e45] [cursor=pointer]
    - generic [ref=e46]:
      - generic:
        - generic [ref=e47]:
          - heading "AutomationExercise" [level=1] [ref=e48]
          - heading "Full-Fledged practice website for Automation Engineers" [level=2] [ref=e49]
          - paragraph [ref=e50]:
            - text: All QA engineers can use this website for automation practice and API testing either they are at beginner or advance level. This is for everybody to help them brush up their automation skills.
            - link "Automation testing software" [ref=e51] [cursor=pointer]
          - link [ref=e55] [cursor=pointer]:
            - /url: /test_cases
            - button "Test Cases" [ref=e56]
          - link [ref=e57] [cursor=pointer]:
            - /url: /api_list
            - button "APIs list for practice" [ref=e58]
        - img "demo website for practice" [ref=e60]
    - link "" [ref=e61] [cursor=pointer]:
      - /url: "#slider-carousel"
    - link "" [ref=e63] [cursor=pointer]:
      - /url: "#slider-carousel"
  - generic [ref=e67]:
    - generic [ref=e69]:
      - heading "Category" [level=2] [ref=e70]
      - generic [ref=e71]:
        - heading [level=4] [ref=e74]:
          - link " Women" [ref=e75] [cursor=pointer]:
            - /url: "#Women"
            - generic [ref=e76]: 
            - text: Women
        - heading [level=4] [ref=e80]:
          - link " Men" [ref=e81] [cursor=pointer]:
            - /url: "#Men"
            - generic [ref=e82]: 
            - text: Men
        - heading [level=4] [ref=e86]:
          - link " Kids" [ref=e87] [cursor=pointer]:
            - /url: "#Kids"
            - generic [ref=e88]: 
            - text: Kids
      - insertion [ref=e91]:
        - generic [ref=e94]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e96]: Discover more
          - link "API testing practice" [ref=e97] [cursor=pointer]
          - link "Software testing courses" [ref=e102] [cursor=pointer]
          - link "Automation practice website" [ref=e107] [cursor=pointer]
          - link "API testing services" [ref=e112] [cursor=pointer]
          - link "Compare Developer Tools" [ref=e117] [cursor=pointer]
          - link "Website development services" [ref=e122] [cursor=pointer]
          - link "Learn Coding Online" [ref=e127] [cursor=pointer]
          - link "T SHIRT" [ref=e132] [cursor=pointer]
      - generic [ref=e137]:
        - heading "Brands" [level=2] [ref=e138]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "(6) Polo" [ref=e142] [cursor=pointer]:
              - /url: /brand_products/Polo
              - generic [ref=e143]: (6)
              - text: Polo
          - listitem [ref=e144]:
            - link "(5) H&M" [ref=e145] [cursor=pointer]:
              - /url: /brand_products/H&M
              - generic [ref=e146]: (5)
              - text: H&M
          - listitem [ref=e147]:
            - link "(5) Madame" [ref=e148] [cursor=pointer]:
              - /url: /brand_products/Madame
              - generic [ref=e149]: (5)
              - text: Madame
          - listitem [ref=e150]:
            - link "(3) Mast & Harbour" [ref=e151] [cursor=pointer]:
              - /url: /brand_products/Mast & Harbour
              - generic [ref=e152]: (3)
              - text: Mast & Harbour
          - listitem [ref=e153]:
            - link "(4) Babyhug" [ref=e154] [cursor=pointer]:
              - /url: /brand_products/Babyhug
              - generic [ref=e155]: (4)
              - text: Babyhug
          - listitem [ref=e156]:
            - link "(3) Allen Solly Junior" [ref=e157] [cursor=pointer]:
              - /url: /brand_products/Allen Solly Junior
              - generic [ref=e158]: (3)
              - text: Allen Solly Junior
          - listitem [ref=e159]:
            - link "(3) Kookie Kids" [ref=e160] [cursor=pointer]:
              - /url: /brand_products/Kookie Kids
              - generic [ref=e161]: (3)
              - text: Kookie Kids
          - listitem [ref=e162]:
            - link "(5) Biba" [ref=e163] [cursor=pointer]:
              - /url: /brand_products/Biba
              - generic [ref=e164]: (5)
              - text: Biba
    - generic [ref=e165]:
      - generic [ref=e166]:
        - heading "Features Items" [level=2] [ref=e167]
        - generic [ref=e169]:
          - generic [ref=e170]:
            - generic [ref=e171]:
              - img "ecommerce website products" [ref=e172]
              - heading "Rs. 500" [level=2] [ref=e173]
              - paragraph [ref=e174]: Blue Top
              - generic [ref=e175] [cursor=pointer]:
                - generic [ref=e176]: 
                - text: Add to cart
            - generic [ref=e177]:
              - heading "Rs. 500" [level=2] [ref=e178]
              - paragraph [ref=e179]: Blue Top
              - generic [ref=e180] [cursor=pointer]:
                - generic [ref=e181]: 
                - text: Add to cart
          - list [ref=e183]:
            - listitem [ref=e184]:
              - link " View Product" [ref=e185] [cursor=pointer]:
                - /url: /product_details/1
                - generic [ref=e186]: 
                - text: View Product
        - generic [ref=e188]:
          - generic [ref=e189]:
            - generic [ref=e190]:
              - img "ecommerce website products" [ref=e191]
              - heading "Rs. 400" [level=2] [ref=e192]
              - paragraph [ref=e193]:
                - text: Men
                - link "Tshirt" [ref=e194] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e197] [cursor=pointer]:
                - generic [ref=e198]: 
                - text: Add to cart
            - generic [ref=e199]:
              - heading "Rs. 400" [level=2] [ref=e200]
              - paragraph [ref=e201]: Men Tshirt
              - generic [ref=e202] [cursor=pointer]:
                - generic [ref=e203]: 
                - text: Add to cart
          - list [ref=e205]:
            - listitem [ref=e206]:
              - link " View Product" [ref=e207] [cursor=pointer]:
                - /url: /product_details/2
                - generic [ref=e208]: 
                - text: View Product
        - generic [ref=e210]:
          - generic [ref=e211]:
            - generic [ref=e212]:
              - img "ecommerce website products" [ref=e213]
              - heading "Rs. 1000" [level=2] [ref=e214]
              - paragraph [ref=e215]: Sleeveless Dress
              - generic [ref=e216] [cursor=pointer]:
                - generic [ref=e217]: 
                - text: Add to cart
            - generic [ref=e218]:
              - heading "Rs. 1000" [level=2] [ref=e219]
              - paragraph [ref=e220]: Sleeveless Dress
              - generic [ref=e221] [cursor=pointer]:
                - generic [ref=e222]: 
                - text: Add to cart
          - list [ref=e224]:
            - listitem [ref=e225]:
              - link " View Product" [ref=e226] [cursor=pointer]:
                - /url: /product_details/3
                - generic [ref=e227]: 
                - text: View Product
        - generic [ref=e229]:
          - generic [ref=e230]:
            - generic [ref=e231]:
              - img "ecommerce website products" [ref=e232]
              - heading "Rs. 1500" [level=2] [ref=e233]
              - paragraph [ref=e234]: Stylish Dress
              - generic [ref=e235] [cursor=pointer]:
                - generic [ref=e236]: 
                - text: Add to cart
            - generic [ref=e237]:
              - heading "Rs. 1500" [level=2] [ref=e238]
              - paragraph [ref=e239]: Stylish Dress
              - generic [ref=e240] [cursor=pointer]:
                - generic [ref=e241]: 
                - text: Add to cart
          - list [ref=e243]:
            - listitem [ref=e244]:
              - link " View Product" [ref=e245] [cursor=pointer]:
                - /url: /product_details/4
                - generic [ref=e246]: 
                - text: View Product
        - generic [ref=e248]:
          - generic [ref=e249]:
            - generic [ref=e250]:
              - img "ecommerce website products" [ref=e251]
              - heading "Rs. 600" [level=2] [ref=e252]
              - paragraph [ref=e253]: Winter Top
              - generic [ref=e254] [cursor=pointer]:
                - generic [ref=e255]: 
                - text: Add to cart
            - generic [ref=e256]:
              - heading "Rs. 600" [level=2] [ref=e257]
              - paragraph [ref=e258]: Winter Top
              - generic [ref=e259] [cursor=pointer]:
                - generic [ref=e260]: 
                - text: Add to cart
          - list [ref=e262]:
            - listitem [ref=e263]:
              - link " View Product" [ref=e264] [cursor=pointer]:
                - /url: /product_details/5
                - generic [ref=e265]: 
                - text: View Product
        - generic [ref=e267]:
          - generic [ref=e268]:
            - generic [ref=e269]:
              - img "ecommerce website products" [ref=e270]
              - heading "Rs. 400" [level=2] [ref=e271]
              - paragraph [ref=e272]: Summer White Top
              - generic [ref=e273] [cursor=pointer]:
                - generic [ref=e274]: 
                - text: Add to cart
            - generic [ref=e275]:
              - heading "Rs. 400" [level=2] [ref=e276]
              - paragraph [ref=e277]: Summer White Top
              - generic [ref=e278] [cursor=pointer]:
                - generic [ref=e279]: 
                - text: Add to cart
          - list [ref=e281]:
            - listitem [ref=e282]:
              - link " View Product" [ref=e283] [cursor=pointer]:
                - /url: /product_details/6
                - generic [ref=e284]: 
                - text: View Product
        - generic [ref=e286]:
          - generic [ref=e287]:
            - generic [ref=e288]:
              - img "ecommerce website products" [ref=e289]
              - heading "Rs. 1000" [level=2] [ref=e290]
              - paragraph [ref=e291]: Madame Top For Women
              - generic [ref=e292] [cursor=pointer]:
                - generic [ref=e293]: 
                - text: Add to cart
            - generic [ref=e294]:
              - heading "Rs. 1000" [level=2] [ref=e295]
              - paragraph [ref=e296]: Madame Top For Women
              - generic [ref=e297] [cursor=pointer]:
                - generic [ref=e298]: 
                - text: Add to cart
          - list [ref=e300]:
            - listitem [ref=e301]:
              - link " View Product" [ref=e302] [cursor=pointer]:
                - /url: /product_details/7
                - generic [ref=e303]: 
                - text: View Product
        - generic [ref=e305]:
          - generic [ref=e306]:
            - generic [ref=e307]:
              - img "ecommerce website products" [ref=e308]
              - heading "Rs. 700" [level=2] [ref=e309]
              - paragraph [ref=e310]: Fancy Green Top
              - generic [ref=e311] [cursor=pointer]:
                - generic [ref=e312]: 
                - text: Add to cart
            - generic [ref=e313]:
              - heading "Rs. 700" [level=2] [ref=e314]
              - paragraph [ref=e315]: Fancy Green Top
              - generic [ref=e316] [cursor=pointer]:
                - generic [ref=e317]: 
                - text: Add to cart
          - list [ref=e319]:
            - listitem [ref=e320]:
              - link " View Product" [ref=e321] [cursor=pointer]:
                - /url: /product_details/8
                - generic [ref=e322]: 
                - text: View Product
        - generic [ref=e324]:
          - generic [ref=e325]:
            - generic [ref=e326]:
              - img "ecommerce website products" [ref=e327]
              - heading "Rs. 499" [level=2] [ref=e328]
              - paragraph [ref=e329]:
                - text: Sleeves Printed Top - White
                - link "E-commerce website templates" [ref=e330] [cursor=pointer]
              - generic [ref=e334] [cursor=pointer]:
                - generic [ref=e335]: 
                - text: Add to cart
            - generic [ref=e336]:
              - heading "Rs. 499" [level=2] [ref=e337]
              - paragraph [ref=e338]: Sleeves Printed Top - White
              - generic [ref=e339] [cursor=pointer]:
                - generic [ref=e340]: 
                - text: Add to cart
          - list [ref=e342]:
            - listitem [ref=e343]:
              - link " View Product" [ref=e344] [cursor=pointer]:
                - /url: /product_details/11
                - generic [ref=e345]: 
                - text: View Product
        - generic [ref=e347]:
          - generic [ref=e348]:
            - generic [ref=e349]:
              - img "ecommerce website products" [ref=e350]
              - heading "Rs. 359" [level=2] [ref=e351]
              - paragraph [ref=e352]:
                - text: Half Sleeves Top Schiffli Detailing - Pink
                - link "Download Productivity Apps" [ref=e353] [cursor=pointer]
              - generic [ref=e357] [cursor=pointer]:
                - generic [ref=e358]: 
                - text: Add to cart
            - generic [ref=e359]:
              - heading "Rs. 359" [level=2] [ref=e360]
              - paragraph [ref=e361]: Half Sleeves Top Schiffli Detailing - Pink
              - generic [ref=e362] [cursor=pointer]:
                - generic [ref=e363]: 
                - text: Add to cart
          - list [ref=e365]:
            - listitem [ref=e366]:
              - link " View Product" [ref=e367] [cursor=pointer]:
                - /url: /product_details/12
                - generic [ref=e368]: 
                - text: View Product
        - generic [ref=e370]:
          - generic [ref=e371]:
            - generic [ref=e372]:
              - img "ecommerce website products" [ref=e373]
              - heading "Rs. 278" [level=2] [ref=e374]
              - paragraph [ref=e375]: Frozen Tops For Kids
              - generic [ref=e376] [cursor=pointer]:
                - generic [ref=e377]: 
                - text: Add to cart
            - generic [ref=e378]:
              - heading "Rs. 278" [level=2] [ref=e379]
              - paragraph [ref=e380]: Frozen Tops For Kids
              - generic [ref=e381] [cursor=pointer]:
                - generic [ref=e382]: 
                - text: Add to cart
          - list [ref=e384]:
            - listitem [ref=e385]:
              - link " View Product" [ref=e386] [cursor=pointer]:
                - /url: /product_details/13
                - generic [ref=e387]: 
                - text: View Product
        - generic [ref=e389]:
          - generic [ref=e390]:
            - generic [ref=e391]:
              - img "ecommerce website products" [ref=e392]
              - heading "Rs. 679" [level=2] [ref=e393]
              - paragraph [ref=e394]:
                - text: Full Sleeves Top Cherry - Pink
                - link "Design Custom Shirts" [ref=e395] [cursor=pointer]
              - generic [ref=e399] [cursor=pointer]:
                - generic [ref=e400]: 
                - text: Add to cart
            - generic [ref=e401]:
              - heading "Rs. 679" [level=2] [ref=e402]
              - paragraph [ref=e403]: Full Sleeves Top Cherry - Pink
              - generic [ref=e404] [cursor=pointer]:
                - generic [ref=e405]: 
                - text: Add to cart
          - list [ref=e407]:
            - listitem [ref=e408]:
              - link " View Product" [ref=e409] [cursor=pointer]:
                - /url: /product_details/14
                - generic [ref=e410]: 
                - text: View Product
        - generic [ref=e412]:
          - generic [ref=e413]:
            - generic [ref=e414]:
              - img "ecommerce website products" [ref=e415]
              - heading "Rs. 315" [level=2] [ref=e416]
              - paragraph [ref=e417]: Printed Off Shoulder Top - White
              - generic [ref=e418] [cursor=pointer]:
                - generic [ref=e419]: 
                - text: Add to cart
            - generic [ref=e420]:
              - heading "Rs. 315" [level=2] [ref=e421]
              - paragraph [ref=e422]: Printed Off Shoulder Top - White
              - generic [ref=e423] [cursor=pointer]:
                - generic [ref=e424]: 
                - text: Add to cart
          - list [ref=e426]:
            - listitem [ref=e427]:
              - link " View Product" [ref=e428] [cursor=pointer]:
                - /url: /product_details/15
                - generic [ref=e429]: 
                - text: View Product
        - generic [ref=e431]:
          - generic [ref=e432]:
            - generic [ref=e433]:
              - img "ecommerce website products" [ref=e434]
              - heading "Rs. 478" [level=2] [ref=e435]
              - paragraph [ref=e436]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e437] [cursor=pointer]:
                - generic [ref=e438]: 
                - text: Add to cart
            - generic [ref=e439]:
              - heading "Rs. 478" [level=2] [ref=e440]
              - paragraph [ref=e441]: Sleeves Top and Short - Blue & Pink
              - generic [ref=e442] [cursor=pointer]:
                - generic [ref=e443]: 
                - text: Add to cart
          - list [ref=e445]:
            - listitem [ref=e446]:
              - link " View Product" [ref=e447] [cursor=pointer]:
                - /url: /product_details/16
                - generic [ref=e448]: 
                - text: View Product
        - generic [ref=e450]:
          - generic [ref=e451]:
            - generic [ref=e452]:
              - img "ecommerce website products" [ref=e453]
              - heading "Rs. 1200" [level=2] [ref=e454]
              - paragraph [ref=e455]: Little Girls Mr. Panda Shirt
              - generic [ref=e456] [cursor=pointer]:
                - generic [ref=e457]: 
                - text: Add to cart
            - generic [ref=e458]:
              - heading "Rs. 1200" [level=2] [ref=e459]
              - paragraph [ref=e460]: Little Girls Mr. Panda Shirt
              - generic [ref=e461] [cursor=pointer]:
                - generic [ref=e462]: 
                - text: Add to cart
          - list [ref=e464]:
            - listitem [ref=e465]:
              - link " View Product" [ref=e466] [cursor=pointer]:
                - /url: /product_details/18
                - generic [ref=e467]: 
                - text: View Product
        - generic [ref=e469]:
          - generic [ref=e470]:
            - generic [ref=e471]:
              - img "ecommerce website products" [ref=e472]
              - heading "Rs. 1050" [level=2] [ref=e473]
              - paragraph [ref=e474]:
                - text: Sleeveless Unicorn Patch Gown - Pink
                - link "Browse Designer Clothes" [ref=e475] [cursor=pointer]
              - generic [ref=e479] [cursor=pointer]:
                - generic [ref=e480]: 
                - text: Add to cart
            - generic [ref=e481]:
              - heading "Rs. 1050" [level=2] [ref=e482]
              - paragraph [ref=e483]: Sleeveless Unicorn Patch Gown - Pink
              - generic [ref=e484] [cursor=pointer]:
                - generic [ref=e485]: 
                - text: Add to cart
          - list [ref=e487]:
            - listitem [ref=e488]:
              - link " View Product" [ref=e489] [cursor=pointer]:
                - /url: /product_details/19
                - generic [ref=e490]: 
                - text: View Product
        - generic [ref=e492]:
          - generic [ref=e493]:
            - generic [ref=e494]:
              - img "ecommerce website products" [ref=e495]
              - heading "Rs. 1190" [level=2] [ref=e496]
              - paragraph [ref=e497]: Cotton Mull Embroidered Dress
              - generic [ref=e498] [cursor=pointer]:
                - generic [ref=e499]: 
                - text: Add to cart
            - generic [ref=e500]:
              - heading "Rs. 1190" [level=2] [ref=e501]
              - paragraph [ref=e502]: Cotton Mull Embroidered Dress
              - generic [ref=e503] [cursor=pointer]:
                - generic [ref=e504]: 
                - text: Add to cart
          - list [ref=e506]:
            - listitem [ref=e507]:
              - link " View Product" [ref=e508] [cursor=pointer]:
                - /url: /product_details/20
                - generic [ref=e509]: 
                - text: View Product
        - generic [ref=e511]:
          - generic [ref=e512]:
            - generic [ref=e513]:
              - img "ecommerce website products" [ref=e514]
              - heading "Rs. 1530" [level=2] [ref=e515]
              - paragraph [ref=e516]: Blue Cotton Indie Mickey Dress
              - generic [ref=e517] [cursor=pointer]:
                - generic [ref=e518]: 
                - text: Add to cart
            - generic [ref=e519]:
              - heading "Rs. 1530" [level=2] [ref=e520]
              - paragraph [ref=e521]: Blue Cotton Indie Mickey Dress
              - generic [ref=e522] [cursor=pointer]:
                - generic [ref=e523]: 
                - text: Add to cart
          - list [ref=e525]:
            - listitem [ref=e526]:
              - link " View Product" [ref=e527] [cursor=pointer]:
                - /url: /product_details/21
                - generic [ref=e528]: 
                - text: View Product
        - generic [ref=e530]:
          - generic [ref=e531]:
            - generic [ref=e532]:
              - img "ecommerce website products" [ref=e533]
              - heading "Rs. 1600" [level=2] [ref=e534]
              - paragraph [ref=e535]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e536] [cursor=pointer]:
                - generic [ref=e537]: 
                - text: Add to cart
            - generic [ref=e538]:
              - heading "Rs. 1600" [level=2] [ref=e539]
              - paragraph [ref=e540]: Long Maxi Tulle Fancy Dress Up Outfits -Pink
              - generic [ref=e541] [cursor=pointer]:
                - generic [ref=e542]: 
                - text: Add to cart
          - list [ref=e544]:
            - listitem [ref=e545]:
              - link " View Product" [ref=e546] [cursor=pointer]:
                - /url: /product_details/22
                - generic [ref=e547]: 
                - text: View Product
        - generic [ref=e549]:
          - generic [ref=e550]:
            - generic [ref=e551]:
              - img "ecommerce website products" [ref=e552]
              - heading "Rs. 1100" [level=2] [ref=e553]
              - paragraph [ref=e554]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e555] [cursor=pointer]:
                - generic [ref=e556]: 
                - text: Add to cart
            - generic [ref=e557]:
              - heading "Rs. 1100" [level=2] [ref=e558]
              - paragraph [ref=e559]: Sleeveless Unicorn Print Fit & Flare Net Dress - Multi
              - generic [ref=e560] [cursor=pointer]:
                - generic [ref=e561]: 
                - text: Add to cart
          - list [ref=e563]:
            - listitem [ref=e564]:
              - link " View Product" [ref=e565] [cursor=pointer]:
                - /url: /product_details/23
                - generic [ref=e566]: 
                - text: View Product
        - generic [ref=e568]:
          - generic [ref=e569]:
            - generic [ref=e570]:
              - img "ecommerce website products" [ref=e571]
              - heading "Rs. 849" [level=2] [ref=e572]
              - paragraph [ref=e573]:
                - text: Colour Blocked Shirt – Sky Blue
                - link "Browse Designer Clothes" [ref=e574] [cursor=pointer]
              - generic [ref=e578] [cursor=pointer]:
                - generic [ref=e579]: 
                - text: Add to cart
            - generic [ref=e580]:
              - heading "Rs. 849" [level=2] [ref=e581]
              - paragraph [ref=e582]: Colour Blocked Shirt – Sky Blue
              - generic [ref=e583] [cursor=pointer]:
                - generic [ref=e584]: 
                - text: Add to cart
          - list [ref=e586]:
            - listitem [ref=e587]:
              - link " View Product" [ref=e588] [cursor=pointer]:
                - /url: /product_details/24
                - generic [ref=e589]: 
                - text: View Product
        - generic [ref=e591]:
          - generic [ref=e592]:
            - generic [ref=e593]:
              - img "ecommerce website products" [ref=e594]
              - heading "Rs. 1299" [level=2] [ref=e595]
              - paragraph [ref=e596]:
                - text: Pure Cotton V-Neck
                - link "T-Shirt" [ref=e597] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e600] [cursor=pointer]:
                - generic [ref=e601]: 
                - text: Add to cart
            - generic [ref=e602]:
              - heading "Rs. 1299" [level=2] [ref=e603]
              - paragraph [ref=e604]: Pure Cotton V-Neck T-Shirt
              - generic [ref=e605] [cursor=pointer]:
                - generic [ref=e606]: 
                - text: Add to cart
          - list [ref=e608]:
            - listitem [ref=e609]:
              - link " View Product" [ref=e610] [cursor=pointer]:
                - /url: /product_details/28
                - generic [ref=e611]: 
                - text: View Product
        - generic [ref=e613]:
          - generic [ref=e614]:
            - generic [ref=e615]:
              - img "ecommerce website products" [ref=e616]
              - heading "Rs. 1000" [level=2] [ref=e617]
              - paragraph [ref=e618]: Green Side Placket Detail T-Shirt
              - generic [ref=e619] [cursor=pointer]:
                - generic [ref=e620]: 
                - text: Add to cart
            - generic [ref=e621]:
              - heading "Rs. 1000" [level=2] [ref=e622]
              - paragraph [ref=e623]: Green Side Placket Detail T-Shirt
              - generic [ref=e624] [cursor=pointer]:
                - generic [ref=e625]: 
                - text: Add to cart
          - list [ref=e627]:
            - listitem [ref=e628]:
              - link " View Product" [ref=e629] [cursor=pointer]:
                - /url: /product_details/29
                - generic [ref=e630]: 
                - text: View Product
        - generic [ref=e632]:
          - generic [ref=e633]:
            - generic [ref=e634]:
              - img "ecommerce website products" [ref=e635]
              - heading "Rs. 1500" [level=2] [ref=e636]
              - paragraph [ref=e637]:
                - text: Premium Polo
                - link "T-Shirts" [ref=e638] [cursor=pointer]:
                  - /url: "#"
              - generic [ref=e641] [cursor=pointer]:
                - generic [ref=e642]: 
                - text: Add to cart
            - generic [ref=e643]:
              - heading "Rs. 1500" [level=2] [ref=e644]
              - paragraph [ref=e645]: Premium Polo T-Shirts
              - generic [ref=e646] [cursor=pointer]:
                - generic [ref=e647]: 
                - text: Add to cart
          - list [ref=e649]:
            - listitem [ref=e650]:
              - link " View Product" [ref=e651] [cursor=pointer]:
                - /url: /product_details/30
                - generic [ref=e652]: 
                - text: View Product
        - generic [ref=e654]:
          - generic [ref=e655]:
            - generic [ref=e656]:
              - img "ecommerce website products" [ref=e657]
              - heading "Rs. 850" [level=2] [ref=e658]
              - paragraph [ref=e659]: Pure Cotton Neon Green Tshirt
              - generic [ref=e660] [cursor=pointer]:
                - generic [ref=e661]: 
                - text: Add to cart
            - generic [ref=e662]:
              - heading "Rs. 850" [level=2] [ref=e663]
              - paragraph [ref=e664]: Pure Cotton Neon Green Tshirt
              - generic [ref=e665] [cursor=pointer]:
                - generic [ref=e666]: 
                - text: Add to cart
          - list [ref=e668]:
            - listitem [ref=e669]:
              - link " View Product" [ref=e670] [cursor=pointer]:
                - /url: /product_details/31
                - generic [ref=e671]: 
                - text: View Product
        - generic [ref=e673]:
          - generic [ref=e674]:
            - generic [ref=e675]:
              - img "ecommerce website products" [ref=e676]
              - heading "Rs. 799" [level=2] [ref=e677]
              - paragraph [ref=e678]: Soft Stretch Jeans
              - generic [ref=e679] [cursor=pointer]:
                - generic [ref=e680]: 
                - text: Add to cart
            - generic [ref=e681]:
              - heading "Rs. 799" [level=2] [ref=e682]
              - paragraph [ref=e683]: Soft Stretch Jeans
              - generic [ref=e684] [cursor=pointer]:
                - generic [ref=e685]: 
                - text: Add to cart
          - list [ref=e687]:
            - listitem [ref=e688]:
              - link " View Product" [ref=e689] [cursor=pointer]:
                - /url: /product_details/33
                - generic [ref=e690]: 
                - text: View Product
        - generic [ref=e692]:
          - generic [ref=e693]:
            - generic [ref=e694]:
              - img "ecommerce website products" [ref=e695]
              - heading "Rs. 1200" [level=2] [ref=e696]
              - paragraph [ref=e697]: Regular Fit Straight Jeans
              - generic [ref=e698] [cursor=pointer]:
                - generic [ref=e699]: 
                - text: Add to cart
            - generic [ref=e700]:
              - heading "Rs. 1200" [level=2] [ref=e701]
              - paragraph [ref=e702]: Regular Fit Straight Jeans
              - generic [ref=e703] [cursor=pointer]:
                - generic [ref=e704]: 
                - text: Add to cart
          - list [ref=e706]:
            - listitem [ref=e707]:
              - link " View Product" [ref=e708] [cursor=pointer]:
                - /url: /product_details/35
                - generic [ref=e709]: 
                - text: View Product
        - generic [ref=e711]:
          - generic [ref=e712]:
            - generic [ref=e713]:
              - img "ecommerce website products" [ref=e714]
              - heading "Rs. 1400" [level=2] [ref=e715]
              - paragraph [ref=e716]: Grunt Blue Slim Fit Jeans
              - generic [ref=e717] [cursor=pointer]:
                - generic [ref=e718]: 
                - text: Add to cart
            - generic [ref=e719]:
              - heading "Rs. 1400" [level=2] [ref=e720]
              - paragraph [ref=e721]: Grunt Blue Slim Fit Jeans
              - generic [ref=e722] [cursor=pointer]:
                - generic [ref=e723]: 
                - text: Add to cart
          - list [ref=e725]:
            - listitem [ref=e726]:
              - link " View Product" [ref=e727] [cursor=pointer]:
                - /url: /product_details/37
                - generic [ref=e728]: 
                - text: View Product
        - generic [ref=e730]:
          - generic [ref=e731]:
            - generic [ref=e732]:
              - img "ecommerce website products" [ref=e733]
              - heading "Rs. 2300" [level=2] [ref=e734]
              - paragraph [ref=e735]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e736] [cursor=pointer]:
                - generic [ref=e737]: 
                - text: Add to cart
            - generic [ref=e738]:
              - heading "Rs. 2300" [level=2] [ref=e739]
              - paragraph [ref=e740]: Rose Pink Embroidered Maxi Dress
              - generic [ref=e741] [cursor=pointer]:
                - generic [ref=e742]: 
                - text: Add to cart
          - list [ref=e744]:
            - listitem [ref=e745]:
              - link " View Product" [ref=e746] [cursor=pointer]:
                - /url: /product_details/38
                - generic [ref=e747]: 
                - text: View Product
        - generic [ref=e749]:
          - generic [ref=e750]:
            - generic [ref=e751]:
              - img "ecommerce website products" [ref=e752]
              - heading "Rs. 3000" [level=2] [ref=e753]
              - paragraph [ref=e754]: Cotton Silk Hand Block Print Saree
              - generic [ref=e755] [cursor=pointer]:
                - generic [ref=e756]: 
                - text: Add to cart
            - generic [ref=e757]:
              - heading "Rs. 3000" [level=2] [ref=e758]
              - paragraph [ref=e759]: Cotton Silk Hand Block Print Saree
              - generic [ref=e760] [cursor=pointer]:
                - generic [ref=e761]: 
                - text: Add to cart
          - list [ref=e763]:
            - listitem [ref=e764]:
              - link " View Product" [ref=e765] [cursor=pointer]:
                - /url: /product_details/39
                - generic [ref=e766]: 
                - text: View Product
        - generic [ref=e768]:
          - generic [ref=e769]:
            - generic [ref=e770]:
              - img "ecommerce website products" [ref=e771]
              - heading "Rs. 3500" [level=2] [ref=e772]
              - paragraph [ref=e773]: Rust Red Linen Saree
              - generic [ref=e774] [cursor=pointer]:
                - generic [ref=e775]: 
                - text: Add to cart
            - generic [ref=e776]:
              - heading "Rs. 3500" [level=2] [ref=e777]
              - paragraph [ref=e778]: Rust Red Linen Saree
              - generic [ref=e779] [cursor=pointer]:
                - generic [ref=e780]: 
                - text: Add to cart
          - list [ref=e782]:
            - listitem [ref=e783]:
              - link " View Product" [ref=e784] [cursor=pointer]:
                - /url: /product_details/40
                - generic [ref=e785]: 
                - text: View Product
        - generic [ref=e787]:
          - generic [ref=e788]:
            - generic [ref=e789]:
              - img "ecommerce website products" [ref=e790]
              - heading "Rs. 5000" [level=2] [ref=e791]
              - paragraph [ref=e792]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e793] [cursor=pointer]:
                - generic [ref=e794]: 
                - text: Add to cart
            - generic [ref=e795]:
              - heading "Rs. 5000" [level=2] [ref=e796]
              - paragraph [ref=e797]: Beautiful Peacock Blue Cotton Linen Saree
              - generic [ref=e798] [cursor=pointer]:
                - generic [ref=e799]: 
                - text: Add to cart
          - list [ref=e801]:
            - listitem [ref=e802]:
              - link " View Product" [ref=e803] [cursor=pointer]:
                - /url: /product_details/41
                - generic [ref=e804]: 
                - text: View Product
        - generic [ref=e806]:
          - generic [ref=e807]:
            - generic [ref=e808]:
              - img "ecommerce website products" [ref=e809]
              - heading "Rs. 1400" [level=2] [ref=e810]
              - paragraph [ref=e811]: Lace Top For Women
              - generic [ref=e812] [cursor=pointer]:
                - generic [ref=e813]: 
                - text: Add to cart
            - generic [ref=e814]:
              - heading "Rs. 1400" [level=2] [ref=e815]
              - paragraph [ref=e816]: Lace Top For Women
              - generic [ref=e817] [cursor=pointer]:
                - generic [ref=e818]: 
                - text: Add to cart
          - list [ref=e820]:
            - listitem [ref=e821]:
              - link " View Product" [ref=e822] [cursor=pointer]:
                - /url: /product_details/42
                - generic [ref=e823]: 
                - text: View Product
        - generic [ref=e825]:
          - generic [ref=e826]:
            - generic [ref=e827]:
              - img "ecommerce website products" [ref=e828]
              - heading "Rs. 1389" [level=2] [ref=e829]
              - paragraph [ref=e830]:
                - text: GRAPHIC DESIGN MEN T SHIRT - BLUE
                - link "Browse Designer Clothes" [ref=e831] [cursor=pointer]
              - generic [ref=e835] [cursor=pointer]:
                - generic [ref=e836]: 
                - text: Add to cart
            - generic [ref=e837]:
              - heading "Rs. 1389" [level=2] [ref=e838]
              - paragraph [ref=e839]: GRAPHIC DESIGN MEN T SHIRT - BLUE
              - generic [ref=e840] [cursor=pointer]:
                - generic [ref=e841]: 
                - text: Add to cart
          - list [ref=e843]:
            - listitem [ref=e844]:
              - link " View Product" [ref=e845] [cursor=pointer]:
                - /url: /product_details/43
                - generic [ref=e846]: 
                - text: View Product
      - generic [ref=e847]:
        - heading "recommended items" [level=2] [ref=e848]
        - generic [ref=e849]:
          - generic [ref=e850]:
            - text:   
            - generic:
              - generic [ref=e854]:
                - img "ecommerce website products" [ref=e855]
                - heading "Rs. 1500" [level=2] [ref=e856]
                - paragraph [ref=e857]: Stylish Dress
                - generic [ref=e858] [cursor=pointer]:
                  - generic [ref=e859]: 
                  - text: Add to cart
              - generic [ref=e863]:
                - img "ecommerce website products" [ref=e864]
                - heading "Rs. 600" [level=2] [ref=e865]
                - paragraph [ref=e866]: Winter Top
                - generic [ref=e867] [cursor=pointer]:
                  - generic [ref=e868]: 
                  - text: Add to cart
              - generic [ref=e872]:
                - img "ecommerce website products" [ref=e873]
                - heading "Rs. 400" [level=2] [ref=e874]
                - paragraph [ref=e875]: Summer White Top
                - generic [ref=e876] [cursor=pointer]:
                  - generic [ref=e877]: 
                  - text: Add to cart
          - link "" [ref=e878] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
          - link "" [ref=e880] [cursor=pointer]:
            - /url: "#recommended-item-carousel"
  - insertion [ref=e883]
  - contentinfo [ref=e885]:
    - generic [ref=e890]:
      - heading "Subscription" [level=2] [ref=e891]
      - generic [ref=e892]:
        - textbox "Your email address" [ref=e893]
        - button "" [ref=e894] [cursor=pointer]
        - paragraph [ref=e896]: Get the most recent updates from our site and be updated your self...
    - paragraph [ref=e900]: Copyright © 2021 All rights reserved
  - text: 
  - generic [ref=e902]:
    - button "Privacy and cookie settings" [ref=e903] [cursor=pointer]
    - generic [ref=e904]: "Managed by Google. Complies with IAB TCF. CMP ID: 300"
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import AxeBuilder from '@axe-core/playwright';
  3  | 
  4  | test('Homepage has no critical or serious accessibility violations', async ({ page }) => {
  5  |   await page.goto('/');
  6  |   const results = await new AxeBuilder({ page }).analyze();
  7  | 
  8  |   const seriousOrWorse = results.violations.filter(
  9  |     (v) => v.impact === 'critical' || v.impact === 'serious'
  10 |   );
  11 | 
> 12 |   expect(seriousOrWorse, JSON.stringify(seriousOrWorse, null, 2)).toEqual([]);
     |                                                                   ^ Error: [
  13 | });
  14 | 
```