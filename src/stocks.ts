const stocks = [
  {
    "Symbol": "MMM",
    "Security": "3M",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Industrial Conglomerates",
    "Headquarters Location": "Saint Paul, Minnesota",
    "Date first added": "1976-08-09",
    "CIK": "0000066740",
    "Founded": 1902
  },
  {
    "Symbol": "ABT",
    "Security": "Abbott",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Health Care Equipment",
    "Headquarters Location": "North Chicago, Illinois",
    "Date first added": "1964-03-31",
    "CIK": "0000001800",
    "Founded": 1888
  },


  {
    "Symbol": "ACN",
    "Security": "Accenture",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "IT Consulting & Other Services",
    "Headquarters Location": "Dublin, Ireland",
    "Date first added": "2011-07-06",
    "CIK": "0001467373",
    "Founded": 1989
  },
  {
    "Symbol": "ATVI",
    "Security": "Activision Blizzard",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Interactive Home Entertainment",
    "Headquarters Location": "Santa Monica, California",
    "Date first added": "2015-08-31",
    "CIK": "0000718877",
    "Founded": 2008
  },
  {
    "Symbol": "ADBE",
    "Security": "Adobe",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Application Software",
    "Headquarters Location": "San Jose, California",
    "Date first added": "1997-05-05",
    "CIK": "0000796343",
    "Founded": 1982
  },
  {
    "Symbol": "AAP",
    "Security": "Advance Auto Parts",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Automotive Retail",
    "Headquarters Location": "Raleigh, North Carolina",
    "Date first added": "2015-07-09",
    "CIK": "0001158449",
    "Founded": 1932
  },
  {
    "Symbol": "AFL",
    "Security": "Aflac",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Life & Health Insurance",
    "Headquarters Location": "Columbus, Georgia",
    "Date first added": "1999-05-28",
    "CIK": "0000004977",
    "Founded": 1955
  },

 
  {
    "Symbol": "ALK",
    "Security": "Alaska Air Group",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Airlines",
    "Headquarters Location": "Seattle, Washington",
    "Date first added": "2016-05-13",
    "CIK": "0000766421",
    "Founded": 1985
  },
  {
    "Symbol": "ALL",
    "Security": "Allstate",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Property & Casualty Insurance",
    "Headquarters Location": "Northfield Township, Illinois",
    "Date first added": "1995-07-13",
    "CIK": "0000899051",
    "Founded": 1931
  },
  {
    "Symbol": "GOOG",
    "Security": "Alphabet (Class C)",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Interactive Media & Services",
    "Headquarters Location": "Mountain View, California",
    "Date first added": "2006-04-03",
    "CIK": "0001652044",
    "Founded": 1998
  },

  {
    "Symbol": "AMZN",
    "Security": "Amazon",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Internet & Direct Marketing Retail",
    "Headquarters Location": "Seattle, Washington",
    "Date first added": "2005-11-18",
    "CIK": "0001018724",
    "Founded": 1994
  },
 
  {
    "Symbol": "AAL",
    "Security": "American Airlines Group",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Airlines",
    "Headquarters Location": "Fort Worth, Texas",
    "Date first added": "2015-03-23",
    "CIK": "0000006201",
    "Founded": 1934
  },

  {
    "Symbol": "AXP",
    "Security": "American Express",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Consumer Finance",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1976-06-30",
    "CIK": "0000004962",
    "Founded": 1850
  },

  {
    "Symbol": "AMP",
    "Security": "Ameriprise Financial",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Asset Management & Custody Banks",
    "Headquarters Location": "Minneapolis, Minnesota",
    "Date first added": "2005-10-03",
    "CIK": "0000820027",
    "Founded": 1894
  },

  {
    "Symbol": "AMGN",
    "Security": "Amgen",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Biotechnology",
    "Headquarters Location": "Thousand Oaks, California",
    "Date first added": "1992-01-02",
    "CIK": "0000318154",
    "Founded": 1980
  },


  {
    "Symbol": "AAPL",
    "Security": "Apple",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Technology Hardware, Storage & Peripherals",
    "Headquarters Location": "Cupertino, California",
    "Date first added": "1982-11-30",
    "CIK": "0000320193",
    "Founded": 1977
  },


  {
    "Symbol": "T",
    "Security": "AT&T",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Integrated Telecommunication Services",
    "Headquarters Location": "Dallas, Texas",
    "Date first added": "1983-11-30 (1957-03-04)",
    "CIK": "0000732717",
    "Founded": "1983 (1885)"
  },
  {
    "Symbol": "ATO",
    "Security": "Atmos Energy",
    "SEC filings": "reports",
    "GICS Sector": "Utilities",
    "GICS Sub-Industry": "Gas Utilities",
    "Headquarters Location": "Dallas, Texas",
    "Date first added": "2019-02-15",
    "CIK": "0000731802",
    "Founded": 1906
  },
  {
    "Symbol": "ADSK",
    "Security": "Autodesk",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Application Software",
    "Headquarters Location": "San Rafael, California",
    "Date first added": "1989-12-01",
    "CIK": "0000769397",
    "Founded": 1982
  },
  {
    "Symbol": "AZO",
    "Security": "AutoZone",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Stores",
    "Headquarters Location": "Memphis, Tennessee",
    "Date first added": "1997-01-02",
    "CIK": "0000866787",
    "Founded": 1979
  },

  {
    "Symbol": "BAC",
    "Security": "Bank of America",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Diversified Banks",
    "Headquarters Location": "Charlotte, North Carolina",
    "Date first added": "1976-06-30",
    "CIK": "0000070858",
    "Founded": "1998 (1923 / 1874)"
  },
  {
    "Symbol": "BBWI",
    "Security": "Bath & Body Works",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Stores",
    "Headquarters Location": "Columbus, Ohio",
    "Date first added": "1983-09-30",
    "CIK": "0000701985",
    "Founded": 1963
  },

 
 
  {
    "Symbol": "BRK.B",
    "Security": "Berkshire Hathaway",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Multi-Sector Holdings",
    "Headquarters Location": "Omaha, Nebraska",
    "Date first added": "2010-02-16",
    "CIK": "0001067983",
    "Founded": 1839
  },
  {
    "Symbol": "BBY",
    "Security": "Best Buy",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Computer & Electronics Retail",
    "Headquarters Location": "Richfield, Minnesota",
    "Date first added": "1999-06-29",
    "CIK": "0000764478",
    "Founded": 1966
  },


  {
    "Symbol": "BIIB",
    "Security": "Biogen",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Biotechnology",
    "Headquarters Location": "Cambridge, Massachusetts",
    "Date first added": "2003-11-13",
    "CIK": "0000875045",
    "Founded": 1978
  },
  {
    "Symbol": "BLK",
    "Security": "BlackRock",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Asset Management & Custody Banks",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2011-04-04",
    "CIK": "0001364742",
    "Founded": 1988
  },
  {
    "Symbol": "BK",
    "Security": "BNY Mellon",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Asset Management & Custody Banks",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1995-03-31",
    "CIK": "0001390777",
    "Founded": 1784
  },
  {
    "Symbol": "BA",
    "Security": "Boeing",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Aerospace & Defense",
    "Headquarters Location": "Chicago, Illinois",
    "Date first added": "1957-03-04",
    "CIK": "0000012927",
    "Founded": 1916
  },
  {
    "Symbol": "BKNG",
    "Security": "Booking Holdings",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Internet & Direct Marketing Retail",
    "Headquarters Location": "Norwalk, Connecticut",
    "Date first added": "2009-11-06",
    "CIK": "0001075531",
    "Founded": 1996
  },


  {
    "Symbol": "BMY",
    "Security": "Bristol Myers Squibb",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Health Care Distributors",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1957-03-04",
    "CIK": "0000014272",
    "Founded": 1989
  },
  {
    "Symbol": "AVGO",
    "Security": "Broadcom",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Semiconductors",
    "Headquarters Location": "San Jose, California",
    "Date first added": "2014-05-08",
    "CIK": "0001730168",
    "Founded": 1961
  },

 
  {
    "Symbol": "CPB",
    "Security": "Campbell's",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Camden, New Jersey",
    "Date first added": "1957-03-04",
    "CIK": "0000016732",
    "Founded": 1869
  },
  {
    "Symbol": "COF",
    "Security": "Capital One",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Consumer Finance",
    "Headquarters Location": "Tysons Corner, Virginia",
    "Date first added": "1998-07-01",
    "CIK": "0000927628",
    "Founded": 1994
  },

  {
    "Symbol": "KMX",
    "Security": "CarMax",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Stores",
    "Headquarters Location": "Richmond, Virginia",
    "Date first added": "2010-06-28",
    "CIK": "0001170010",
    "Founded": 1993
  },
  {
    "Symbol": "CCL",
    "Security": "Carnival",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Hotels, Resorts & Cruise Lines",
    "Headquarters Location": "Miami, Florida",
    "Date first added": "1998-12-22",
    "CIK": "0000815097",
    "Founded": 1972
  },


  {
    "Symbol": "SCHW",
    "Security": "Charles Schwab",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Investment Banking & Brokerage",
    "Headquarters Location": "Westlake, Texas",
    "Date first added": "1997-06-02",
    "CIK": "0000316709",
    "Founded": 1971
  },

  {
    "Symbol": "CVX",
    "Security": "Chevron",
    "SEC filings": "reports",
    "GICS Sector": "Energy",
    "GICS Sub-Industry": "Integrated Oil & Gas",
    "Headquarters Location": "San Ramon, California",
    "Date first added": "1957-03-04",
    "CIK": "0000093410",
    "Founded": 1879
  },
  {
    "Symbol": "CMG",
    "Security": "Chipotle Mexican Grill",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Restaurants",
    "Headquarters Location": "Newport Beach, California",
    "Date first added": "2011-04-28",
    "CIK": "0001058090",
    "Founded": 1993
  },




  {
    "Symbol": "CSCO",
    "Security": "Cisco",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Communications Equipment",
    "Headquarters Location": "San Jose, California",
    "Date first added": "1993-12-01",
    "CIK": "0000858877",
    "Founded": 1984
  },
  {
    "Symbol": "C",
    "Security": "Citigroup",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Diversified Banks",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1988-05-31",
    "CIK": "0000831001",
    "Founded": 1998
  },

  
  {
    "Symbol": "CLX",
    "Security": "Clorox",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Household Products",
    "Headquarters Location": "Oakland, California",
    "Date first added": "1969-03-31",
    "CIK": "0000021076",
    "Founded": 1913
  },

  {
    "Symbol": "KO",
    "Security": "Coca-Cola",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Soft Drinks",
    "Headquarters Location": "Atlanta, Georgia",
    "Date first added": "1957-03-04",
    "CIK": "0000021344",
    "Founded": 1886
  },

  {
    "Symbol": "CL",
    "Security": "Colgate-Palmolive",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Household Products",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1957-03-04",
    "CIK": "0000021665",
    "Founded": 1806
  },
  {
    "Symbol": "CMCSA",
    "Security": "Comcast",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Cable & Satellite",
    "Headquarters Location": "Philadelphia, Pennsylvania",
    "Date first added": "2002-11-19",
    "CIK": "0001166691",
    "Founded": 1963
  },

  {
    "Symbol": "CAG",
    "Security": "Conagra Brands",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Chicago, Illinois",
    "Date first added": "1983-08-31",
    "CIK": "0000023217",
    "Founded": 1919
  },


  {
    "Symbol": "STZ",
    "Security": "Constellation Brands",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Distillers & Vintners",
    "Headquarters Location": "Victor, New York",
    "Date first added": "2005-07-01",
    "CIK": "0000016918",
    "Founded": 1945
  },

  {
    "Symbol": "GLW",
    "Security": "Corning",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Electronic Components",
    "Headquarters Location": "Corning, New York",
    "Date first added": "",
    "CIK": "0000024741",
    "Founded": 1851
  },
 
  {
    "Symbol": "COST",
    "Security": "Costco",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Hypermarkets & Super Centers",
    "Headquarters Location": "Issaquah, Washington",
    "Date first added": "1993-10-01",
    "CIK": "0000909832",
    "Founded": 1976
  },
  


  {
    "Symbol": "CVS",
    "Security": "CVS Health",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Health Care Services",
    "Headquarters Location": "Woonsocket, Rhode Island",
    "Date first added": "1957-03-04",
    "CIK": "0000064803",
    "Founded": 1996
  },



  

  {
    "Symbol": "DAL",
    "Security": "Delta Air Lines",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Airlines",
    "Headquarters Location": "Atlanta, Georgia",
    "Date first added": "2013-09-11",
    "CIK": "0000027904",
    "Founded": 1929
  },
 

  {
    "Symbol": "FANG",
    "Security": "Diamondback",
    "SEC filings": "reports",
    "GICS Sector": "Energy",
    "GICS Sub-Industry": "Oil & Gas Exploration & Production",
    "Headquarters Location": "Midland, Texas",
    "Date first added": "2018-12-03",
    "CIK": "0001539838",
    "Founded": 2007
  },

  {
    "Symbol": "DFS",
    "Security": "Discover",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Consumer Finance",
    "Headquarters Location": "Riverwoods, Illinois",
    "Date first added": "2007-07-02",
    "CIK": "0001393612",
    "Founded": 1985
  },
  {
    "Symbol": "DISCA",
    "Security": "Discovery (Series A)",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Broadcasting",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2010-03-01",
    "CIK": "0001437107",
    "Founded": 1985
  },
  {
    "Symbol": "DISH",
    "Security": "Dish",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Cable & Satellite",
    "Headquarters Location": "Meridian, Colorado",
    "Date first added": "2017-03-13",
    "CIK": "0001001082",
    "Founded": 1980
  },
  {
    "Symbol": "DIS",
    "Security": "Disney",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Movies & Entertainment",
    "Headquarters Location": "Burbank, California",
    "Date first added": "1976-06-30",
    "CIK": "0001744489",
    "Founded": 1923
  },
  {
    "Symbol": "DG",
    "Security": "Dollar General",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "General Merchandise Stores",
    "Headquarters Location": "Goodlettsville, Tennessee",
    "Date first added": "2012-12-03",
    "CIK": "0000029534",
    "Founded": 1939
  },
  {
    "Symbol": "DLTR",
    "Security": "Dollar Tree",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "General Merchandise Stores",
    "Headquarters Location": "Chesapeake, Virginia",
    "Date first added": "2011-12-19",
    "CIK": "0000935703",
    "Founded": 1986
  },

  {
    "Symbol": "DPZ",
    "Security": "Domino's",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Restaurants",
    "Headquarters Location": "Ann Arbor, Michigan",
    "Date first added": "2020-05-12",
    "CIK": "0001286681",
    "Founded": 1960
  },



 
  
  {
    "Symbol": "DD",
    "Security": "DuPont",
    "SEC filings": "reports",
    "GICS Sector": "Materials",
    "GICS Sub-Industry": "Specialty Chemicals",
    "Headquarters Location": "Wilmington, Delaware",
    "Date first added": "2019-04-02",
    "CIK": "0001666700",
    "Founded": 2017
  },

  {
    "Symbol": "EBAY",
    "Security": "eBay",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Internet & Direct Marketing Retail",
    "Headquarters Location": "San Jose, California",
    "Date first added": "2002-07-22",
    "CIK": "0001065088",
    "Founded": 1995
  },


 
  {
    "Symbol": "EA",
    "Security": "Electronic Arts",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Interactive Home Entertainment",
    "Headquarters Location": "Redwood City, California",
    "Date first added": "2002-07-22",
    "CIK": "0000712515",
    "Founded": 1982
  },

 


  
  {
    "Symbol": "EFX",
    "Security": "Equifax",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Research & Consulting Services",
    "Headquarters Location": "Atlanta, Georgia",
    "Date first added": "1997-06-19",
    "CIK": "0000033185",
    "Founded": 1899
  },

 
  
  {
    "Symbol": "EL",
    "Security": "Estée Lauder Companies",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Personal Products",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2006-01-05",
    "CIK": "0001001250",
    "Founded": 1946
  },
  {
    "Symbol": "ETSY",
    "Security": "Etsy",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Internet & Direct Marketing Retail",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2020-09-21",
    "CIK": "0001370637",
    "Founded": 2005
  },


 
  {
    "Symbol": "EXPE",
    "Security": "Expedia Group",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Internet & Direct Marketing Retail",
    "Headquarters Location": "Seattle, Washington",
    "Date first added": "2007-10-02",
    "CIK": "0001324424",
    "Founded": 1996
  },


  {
    "Symbol": "XOM",
    "Security": "ExxonMobil",
    "SEC filings": "reports",
    "GICS Sector": "Energy",
    "GICS Sub-Industry": "Integrated Oil & Gas",
    "Headquarters Location": "Irving, Texas",
    "Date first added": "1957-03-04",
    "CIK": "0000034088",
    "Founded": 1999
  },


  {
    "Symbol": "FDX",
    "Security": "FedEx",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Air Freight & Logistics",
    "Headquarters Location": "Memphis, Tennessee",
    "Date first added": "1980-12-31",
    "CIK": "0001048911",
    "Founded": 1971
  },
 

 
 
  {
    "Symbol": "F",
    "Security": "Ford",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Automobile Manufacturers",
    "Headquarters Location": "Dearborn, Michigan",
    "Date first added": "1957-03-04",
    "CIK": "0000037996",
    "Founded": 1903
  },

  {
    "Symbol": "FBHS",
    "Security": "Fortune Brands",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Building Products",
    "Headquarters Location": "Deerfield, Illinois",
    "Date first added": "2016-06-22",
    "CIK": "0001519751",
    "Founded": "2011 (1969)"
  },
  {
    "Symbol": "FOX",
    "Security": "Fox Corporation (Class B)",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Movies & Entertainment",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2015-09-18",
    "CIK": "0001754301",
    "Founded": 2019
  },

 

  {
    "Symbol": "GRMN",
    "Security": "Garmin",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Consumer Electronics",
    "Headquarters Location": "Schaffhausen, Switzerland",
    "Date first added": "2012-12-12",
    "CIK": "0001121788",
    "Founded": 1989
  },

  {
    "Symbol": "GE",
    "Security": "GE",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Industrial Conglomerates",
    "Headquarters Location": "Boston, Massachusetts",
    "Date first added": "",
    "CIK": "0000040545",
    "Founded": 1892
  },


  {
    "Symbol": "GIS",
    "Security": "General Mills",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Golden Valley, Minnesota",
    "Date first added": "1969-03-31",
    "CIK": "0000040704",
    "Founded": 1856
  },

  {
    "Symbol": "GILD",
    "Security": "Gilead",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Biotechnology",
    "Headquarters Location": "Foster City, California",
    "Date first added": "2004-07-01",
    "CIK": "0000882095",
    "Founded": 1987
  },
 
  
  {
    "Symbol": "GM",
    "Security": "GM",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Automobile Manufacturers",
    "Headquarters Location": "Detroit, Michigan",
    "Date first added": "2013-06-06",
    "CIK": "0001467858",
    "Founded": 1908
  },
  {
    "Symbol": "GS",
    "Security": "Goldman Sachs",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Investment Banking & Brokerage",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2002-07-22",
    "CIK": "0000886982",
    "Founded": 1869
  },

  {
    "Symbol": "HAL",
    "Security": "Halliburton",
    "SEC filings": "reports",
    "GICS Sector": "Energy",
    "GICS Sub-Industry": "Oil & Gas Equipment & Services",
    "Headquarters Location": "Houston, Texas",
    "Date first added": "1957-03-04",
    "CIK": "0000045012",
    "Founded": 1919
  },

  {
    "Symbol": "HAS",
    "Security": "Hasbro",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Leisure Products",
    "Headquarters Location": "Pawtucket, Rhode Island",
    "Date first added": "1984-09-30",
    "CIK": "0000046080",
    "Founded": 1923
  },



  {
    "Symbol": "HSY",
    "Security": "Hershey's",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Hershey, Pennsylvania",
    "Date first added": "1957-03-04",
    "CIK": "0000047111",
    "Founded": 1894
  },

  {
    "Symbol": "HLT",
    "Security": "Hilton",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Hotels, Resorts & Cruise Lines",
    "Headquarters Location": "Tysons Corner, Virginia",
    "Date first added": "2017-06-19",
    "CIK": "0001585689",
    "Founded": 1919
  },

  {
    "Symbol": "HD",
    "Security": "Home Depot",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Home Improvement Retail",
    "Headquarters Location": "Atlanta, Georgia",
    "Date first added": "1988-03-31",
    "CIK": "0000354950",
    "Founded": 1978
  },
  {
    "Symbol": "HON",
    "Security": "Honeywell",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Industrial Conglomerates",
    "Headquarters Location": "Charlotte, North Carolina",
    "Date first added": "1964-03-31",
    "CIK": "0000773840",
    "Founded": 1906
  },
 
 

  {
    "Symbol": "HPQ",
    "Security": "HP",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Technology Hardware, Storage & Peripherals",
    "Headquarters Location": "Palo Alto, California",
    "Date first added": "1974-12-31",
    "CIK": "0000047217",
    "Founded": "1939 (2015)"
  },
  {
    "Symbol": "HUM",
    "Security": "Humana",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Managed Health Care",
    "Headquarters Location": "Louisville, Kentucky",
    "Date first added": "",
    "CIK": "0000049071",
    "Founded": 1961
  },

 


 

  {
    "Symbol": "INTC",
    "Security": "Intel",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Semiconductors",
    "Headquarters Location": "Santa Clara, California",
    "Date first added": "1976-12-31",
    "CIK": "0000050863",
    "Founded": 1968
  },

  {
    "Symbol": "IBM",
    "Security": "IBM",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "IT Consulting & Other Services",
    "Headquarters Location": "Armonk, New York",
    "Date first added": "1957-03-04",
    "CIK": "0000051143",
    "Founded": 1911
  },



  {
    "Symbol": "INTU",
    "Security": "Intuit",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Application Software",
    "Headquarters Location": "Mountain View, California",
    "Date first added": "2000-12-05",
    "CIK": "0000896878",
    "Founded": 1983
  },

  {
    "Symbol": "IVZ",
    "Security": "Invesco",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Asset Management & Custody Banks",
    "Headquarters Location": "Atlanta, Georgia",
    "Date first added": "2008-08-21",
    "CIK": "0000914208",
    "Founded": 1935
  },


 
 
  {
    "Symbol": "JNJ",
    "Security": "Johnson & Johnson",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Pharmaceuticals",
    "Headquarters Location": "New Brunswick, New Jersey",
    "Date first added": "1973-06-30",
    "CIK": "0000200406",
    "Founded": 1886
  },
 
  {
    "Symbol": "JPM",
    "Security": "JPMorgan Chase",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Diversified Banks",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1975-06-30",
    "CIK": "0000019617",
    "Founded": "2000 (1799 / 1871)"
  },

  {
    "Symbol": "K",
    "Security": "Kellogg's",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Battle Creek, Michigan",
    "Date first added": "1989-09-11",
    "CIK": "0000055067",
    "Founded": 1906
  },
 
 
  {
    "Symbol": "KMB",
    "Security": "Kimberly-Clark",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Household Products",
    "Headquarters Location": "Irving, Texas",
    "Date first added": "1957-03-04",
    "CIK": "0000055785",
    "Founded": 1872
  },
  
  

  {
    "Symbol": "KHC",
    "Security": "Kraft Heinz",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Chicago, Illinois; Pittsburgh, Pennsylvania",
    "Date first added": "2015-07-06",
    "CIK": "0001637459",
    "Founded": "2015 (1869)"
  },
  {
    "Symbol": "KR",
    "Security": "Kroger",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Food Retail",
    "Headquarters Location": "Cincinnati, Ohio",
    "Date first added": "1957-03-04",
    "CIK": "0000056873",
    "Founded": 1883
  },
 
  {
    "Symbol": "LH",
    "Security": "LabCorp",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Health Care Services",
    "Headquarters Location": "Burlington, North Carolina",
    "Date first added": "2004-11-01",
    "CIK": "0000920148",
    "Founded": 1978
  },








  {
    "Symbol": "LMT",
    "Security": "Lockheed Martin",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Aerospace & Defense",
    "Headquarters Location": "Bethesda, Maryland",
    "Date first added": "1984-07-31",
    "CIK": "0000936468",
    "Founded": 1995
  },

  {
    "Symbol": "LOW",
    "Security": "Lowe's",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Home Improvement Retail",
    "Headquarters Location": "Mooresville, North Carolina",
    "Date first added": "1984-02-29",
    "CIK": "0000060667",
    "Founded": "1904/1946/1959"
  },




  {
    "Symbol": "MAR",
    "Security": "Marriott International",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Hotels, Resorts & Cruise Lines",
    "Headquarters Location": "Bethesda, Maryland",
    "Date first added": "",
    "CIK": "0001048286",
    "Founded": 1927
  },


  {
    "Symbol": "MA",
    "Security": "Mastercard",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Data Processing & Outsourced Services",
    "Headquarters Location": "Harrison, New York",
    "Date first added": "2008-07-18",
    "CIK": "0001141391",
    "Founded": 1966
  },
  {
    "Symbol": "MTCH",
    "Security": "Match Group",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Interactive Media & Services",
    "Headquarters Location": "Dallas, Texas",
    "Date first added": "2021-09-20",
    "CIK": "0000891103",
    "Founded": 1986
  },
  {
    "Symbol": "MKC",
    "Security": "McCormick",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Hunt Valley, Maryland",
    "Date first added": "2003-03-20",
    "CIK": "0000063754",
    "Founded": 1889
  },
  {
    "Symbol": "MCD",
    "Security": "McDonald's",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Restaurants",
    "Headquarters Location": "Chicago, Illinois",
    "Date first added": "1970-06-30",
    "CIK": "0000063908",
    "Founded": 1940
  },
  {
    "Symbol": "MCK",
    "Security": "McKesson",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Health Care Distributors",
    "Headquarters Location": "Irving, Texas",
    "Date first added": "",
    "CIK": "0000927653",
    "Founded": 1833
  },

  {
    "Symbol": "MRK",
    "Security": "Merck",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Pharmaceuticals",
    "Headquarters Location": "Kenilworth, New Jersey",
    "Date first added": "1957-03-04",
    "CIK": "0000310158",
    "Founded": 1891
  },
  {
    "Symbol": "FB",
    "Security": "Meta",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Interactive Media & Services",
    "Headquarters Location": "Menlo Park, California",
    "Date first added": "2013-12-23",
    "CIK": "0001326801",
    "Founded": 2004
  },
  {
    "Symbol": "MET",
    "Security": "MetLife",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Life & Health Insurance",
    "Headquarters Location": "New York City, New York",
    "Date first added": "",
    "CIK": "0001099219",
    "Founded": 1868
  },

  {
    "Symbol": "MGM",
    "Security": "MGM Resorts",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Casinos & Gaming",
    "Headquarters Location": "Paradise, Nevada",
    "Date first added": "2017-07-26",
    "CIK": "0000789570",
    "Founded": 1986
  },
  

  {
    "Symbol": "MSFT",
    "Security": "Microsoft",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Systems Software",
    "Headquarters Location": "Redmond, Washington",
    "Date first added": "1994-06-01",
    "CIK": "0000789019",
    "Founded": 1975
  },

  {
    "Symbol": "MRNA",
    "Security": "Moderna",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Biotechnology",
    "Headquarters Location": "Cambridge, Massachusetts",
    "Date first added": "2021-07-21",
    "CIK": "0001682852",
    "Founded": 2010
  },
  {
    "Symbol": "MHK",
    "Security": "Mohawk Industries",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Home Furnishings",
    "Headquarters Location": "Calhoun, Georgia",
    "Date first added": "2013-12-23",
    "CIK": "0000851968",
    "Founded": 1878
  },

  {
    "Symbol": "TAP",
    "Security": "Molson Coors",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Brewers",
    "Headquarters Location": "Chicago, Illinois",
    "Date first added": "1976-06-30",
    "CIK": "0000024545",
    "Founded": "2005 (Molson 1786, Coors 1873)"
  },


  {
    "Symbol": "MNST",
    "Security": "Monster Beverage",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Soft Drinks",
    "Headquarters Location": "Corona, California",
    "Date first added": "2012-06-28",
    "CIK": "0000865752",
    "Founded": "2012 (1935)"
  },
  {
    "Symbol": "MCO",
    "Security": "Moody's",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Financial Exchanges & Data",
    "Headquarters Location": "New York City, New York",
    "Date first added": "",
    "CIK": "0001059556",
    "Founded": 1909
  },
  {
    "Symbol": "MS",
    "Security": "Morgan Stanley",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Investment Banking & Brokerage",
    "Headquarters Location": "New York City, New York",
    "Date first added": "",
    "CIK": "0000895421",
    "Founded": 1935
  },

  {
    "Symbol": "MSI",
    "Security": "Motorola Solutions",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Communications Equipment",
    "Headquarters Location": "Chicago, Illinois",
    "Date first added": "",
    "CIK": "0000068505",
    "Founded": "1928 (2011)"
  },
  {
    "Symbol": "NDAQ",
    "Security": "Nasdaq",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Financial Exchanges & Data",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2008-10-22",
    "CIK": "0001120193",
    "Founded": 1971
  },

  {
    "Symbol": "NFLX",
    "Security": "Netflix",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Movies & Entertainment",
    "Headquarters Location": "Los Gatos, California",
    "Date first added": "2010-12-20",
    "CIK": "0001065280",
    "Founded": 1997
  },



  {
    "Symbol": "NKE",
    "Security": "Nike",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Apparel, Accessories & Luxury Goods",
    "Headquarters Location": "Washington County, Oregon",
    "Date first added": "1988-11-30",
    "CIK": "0000320187",
    "Founded": 1964
  },



  {
    "Symbol": "NCLH",
    "Security": "Norwegian Cruise Line Holdings",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Hotels, Resorts & Cruise Lines",
    "Headquarters Location": "Miami, Florida",
    "Date first added": "2017-10-13",
    "CIK": "0001513761",
    "Founded": "2011 (1966)"
  },

  {
    "Symbol": "NVDA",
    "Security": "Nvidia",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Semiconductors",
    "Headquarters Location": "Santa Clara, California",
    "Date first added": "2001-11-30",
    "CIK": "0001045810",
    "Founded": 1993
  },

 

 

 
  {
    "Symbol": "ORCL",
    "Security": "Oracle",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Application Software",
    "Headquarters Location": "Austin, Texas",
    "Date first added": "1989-08-31",
    "CIK": "0001341439",
    "Founded": 1977
  },


  {
    "Symbol": "PARA",
    "Security": "Paramount",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Movies & Entertainment",
    "Headquarters Location": "New York City, New York",
    "Date first added": "",
    "CIK": "0000813828",
    "Founded": "2019 (1952)"
  },


  {
    "Symbol": "PYPL",
    "Security": "PayPal",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Data Processing & Outsourced Services",
    "Headquarters Location": "San Jose, California",
    "Date first added": "2015-07-20",
    "CIK": "0001633917",
    "Founded": 1998
  },


  {
    "Symbol": "PEP",
    "Security": "PepsiCo",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Soft Drinks",
    "Headquarters Location": "Purchase, New York",
    "Date first added": "1957-03-04",
    "CIK": "0000077476",
    "Founded": 1898
  },

  {
    "Symbol": "PFE",
    "Security": "Pfizer",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Pharmaceuticals",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1957-03-04",
    "CIK": "0000078003",
    "Founded": 1849
  },



  {
    "Symbol": "PNC",
    "Security": "PNC Financial Services",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Regional Banks",
    "Headquarters Location": "Pittsburgh, Pennsylvania",
    "Date first added": "1988-04-30",
    "CIK": "0000713676",
    "Founded": 1845
  },


  {
    "Symbol": "PG",
    "Security": "Procter & Gamble",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Personal Products",
    "Headquarters Location": "Cincinnati, Ohio",
    "Date first added": "1957-03-04",
    "CIK": "0000080424",
    "Founded": 1837
  },
  {
    "Symbol": "PGR",
    "Security": "Progressive",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Property & Casualty Insurance",
    "Headquarters Location": "Mayfield Village, Ohio",
    "Date first added": "1997-08-04",
    "CIK": "0000080661",
    "Founded": 1937
  },

  {
    "Symbol": "PRU",
    "Security": "Prudential",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Life & Health Insurance",
    "Headquarters Location": "Newark, New Jersey",
    "Date first added": "2002-07-22",
    "CIK": "0001137774",
    "Founded": 1875
  },
  {
    "Symbol": "PEG",
    "Security": "PSEG",
    "SEC filings": "reports",
    "GICS Sector": "Utilities",
    "GICS Sub-Industry": "Electric Utilities",
    "Headquarters Location": "Newark, New Jersey",
    "Date first added": "1957-03-04",
    "CIK": "0000788784",
    "Founded": 1903
  },




  {
    "Symbol": "QCOM",
    "Security": "Qualcomm",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Semiconductors",
    "Headquarters Location": "San Diego, California",
    "Date first added": "",
    "CIK": "0000804328",
    "Founded": 1985
  },

  {
    "Symbol": "RL",
    "Security": "Ralph Lauren",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Apparel, Accessories & Luxury Goods",
    "Headquarters Location": "New York City, New York",
    "Date first added": "2007-02-02",
    "CIK": "0001037038",
    "Founded": 1967
  },


 
 
  {
    "Symbol": "REGN",
    "Security": "Regeneron",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Biotechnology",
    "Headquarters Location": "Tarrytown, New York",
    "Date first added": "2013-05-01",
    "CIK": "0000872589",
    "Founded": 1988
  },




 
  {
    "Symbol": "RCL",
    "Security": "Royal Caribbean Group",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Hotels, Resorts & Cruise Lines",
    "Headquarters Location": "Miami, Florida",
    "Date first added": "2014-12-05",
    "CIK": "0000884887",
    "Founded": 1997
  },
 
  {
    "Symbol": "CRM",
    "Security": "Salesforce",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Application Software",
    "Headquarters Location": "San Francisco, California",
    "Date first added": "2008-09-15",
    "CIK": "0001108524",
    "Founded": 1999
  },

 

 



  {
    "Symbol": "SJM",
    "Security": "Smucker",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Orrville, Ohio",
    "Date first added": "2008-11-06",
    "CIK": "0000091419",
    "Founded": 1897
  },

 
  {
    "Symbol": "LUV",
    "Security": "Southwest Airlines",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Airlines",
    "Headquarters Location": "Dallas, Texas",
    "Date first added": "1994-07-01",
    "CIK": "0000092380",
    "Founded": 1967
  },
 
  {
    "Symbol": "SBUX",
    "Security": "Starbucks",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Restaurants",
    "Headquarters Location": "Seattle, Washington",
    "Date first added": "2000-06-07",
    "CIK": "0000829224",
    "Founded": 1971
  },

  
  {
    "Symbol": "SYK",
    "Security": "Stryker",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Health Care Equipment",
    "Headquarters Location": "Kalamazoo, Michigan",
    "Date first added": "2000-12-12",
    "CIK": "0000310764",
    "Founded": 1941
  },

 
 
  {
    "Symbol": "TMUS",
    "Security": "T-Mobile",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Wireless Telecommunication Services",
    "Headquarters Location": "Bellevue, Washington",
    "Date first added": "2019-07-15",
    "CIK": "0001283699",
    "Founded": 1994
  },


  {
    "Symbol": "TGT",
    "Security": "Target",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "General Merchandise Stores",
    "Headquarters Location": "Minneapolis, Minnesota",
    "Date first added": "1976-12-31",
    "CIK": "0000027419",
    "Founded": 1902
  },

 

  {
    "Symbol": "TSLA",
    "Security": "Tesla",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Automobile Manufacturers",
    "Headquarters Location": "Palo Alto, California",
    "Date first added": "2020-12-21",
    "CIK": "0001318605",
    "Founded": 2003
  },
  {
    "Symbol": "TXN",
    "Security": "Texas Instruments",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Semiconductors",
    "Headquarters Location": "Dallas, Texas",
    "Date first added": "",
    "CIK": "0000097476",
    "Founded": 1930
  },

  {
    "Symbol": "TMO",
    "Security": "Thermo Fisher Scientific",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Life Sciences Tools & Services",
    "Headquarters Location": "Waltham, Massachusetts",
    "Date first added": "2004-08-03",
    "CIK": "0000097745",
    "Founded": "2006 (1902)"
  },



 
  {
    "Symbol": "TWTR",
    "Security": "Twitter",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Interactive Media & Services",
    "Headquarters Location": "San Francisco, California",
    "Date first added": "2018-06-07",
    "CIK": "0001418091",
    "Founded": 2006
  },

  {
    "Symbol": "TSN",
    "Security": "Tyson",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Packaged Foods & Meats",
    "Headquarters Location": "Springdale, Arkansas",
    "Date first added": "2005-08-10",
    "CIK": "0000100493",
    "Founded": 1935
  },


  {
    "Symbol": "ULTA",
    "Security": "Ulta Beauty",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Stores",
    "Headquarters Location": "Bolingbrook, Illinois",
    "Date first added": "2016-04-18",
    "CIK": "0001403568",
    "Founded": 1990
  },
  {
    "Symbol": "UAA",
    "Security": "Under Armour (Class A)",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Apparel, Accessories & Luxury Goods",
    "Headquarters Location": "Baltimore, Maryland",
    "Date first added": "2014-05-01",
    "CIK": "0001336917",
    "Founded": 1996
  },


  {
    "Symbol": "UAL",
    "Security": "United Airlines",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Airlines",
    "Headquarters Location": "Chicago, Illinois",
    "Date first added": "2015-09-03",
    "CIK": "0000100517",
    "Founded": 1967
  },
  {
    "Symbol": "UNH",
    "Security": "UnitedHealth Group",
    "SEC filings": "reports",
    "GICS Sector": "Health Care",
    "GICS Sub-Industry": "Managed Health Care",
    "Headquarters Location": "Minnetonka, Minnesota",
    "Date first added": "1994-07-01",
    "CIK": "0000731766",
    "Founded": 1977
  },
  {
    "Symbol": "UPS",
    "Security": "United Parcel Service",
    "SEC filings": "reports",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Air Freight & Logistics",
    "Headquarters Location": "Sandy Springs, Georgia",
    "Date first added": "2002-07-22",
    "CIK": "0001090727",
    "Founded": 1907
  },

 
  {
    "Symbol": "VLO",
    "Security": "Valero",
    "SEC filings": "reports",
    "GICS Sector": "Energy",
    "GICS Sub-Industry": "Oil & Gas Refining & Marketing",
    "Headquarters Location": "San Antonio, Texas",
    "Date first added": "",
    "CIK": "0001035002",
    "Founded": 1980
  },


  
  {
    "Symbol": "VZ",
    "Security": "Verizon",
    "SEC filings": "reports",
    "GICS Sector": "Communication Services",
    "GICS Sub-Industry": "Integrated Telecommunication Services",
    "Headquarters Location": "New York City, New York",
    "Date first added": "1983-11-30",
    "CIK": "0000732712",
    "Founded": "1983 (1877)"
  },


  {
    "Symbol": "V",
    "Security": "Visa",
    "SEC filings": "reports",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Data Processing & Outsourced Services",
    "Headquarters Location": "San Francisco, California",
    "Date first added": "2009-12-21",
    "CIK": "0001403161",
    "Founded": 1958
  },



  {
    "Symbol": "WMT",
    "Security": "Walmart",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Hypermarkets & Super Centers",
    "Headquarters Location": "Bentonville, Arkansas",
    "Date first added": "1982-08-31",
    "CIK": "0000104169",
    "Founded": 1962
  },
  {
    "Symbol": "WBA",
    "Security": "Walgreens Boots Alliance",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Staples",
    "GICS Sub-Industry": "Drug Retail",
    "Headquarters Location": "Deerfield, Illinois",
    "Date first added": "1979-12-31",
    "CIK": "0001618921",
    "Founded": 2014
  },


 
  {
    "Symbol": "WFC",
    "Security": "Wells Fargo",
    "SEC filings": "reports",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Diversified Banks",
    "Headquarters Location": "San Francisco, California",
    "Date first added": "1976-06-30",
    "CIK": "0000072971",
    "Founded": 1852
  },





  {
    "Symbol": "WHR",
    "Security": "Whirlpool",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Household Appliances",
    "Headquarters Location": "Benton Harbor, Michigan",
    "Date first added": "",
    "CIK": "0000106640",
    "Founded": 1911
  },





  {
    "Symbol": "YUM",
    "Security": "Yum! Brands",
    "SEC filings": "reports",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Restaurants",
    "Headquarters Location": "Louisville, Kentucky",
    "Date first added": "1997-10-06",
    "CIK": "0001041061",
    "Founded": 1997
  },

  {
    "Symbol": "SQ",
    "Security": "Block(Square) Inc",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "IT Services",
    "Founded": 2009,
    "Headquarters Location": "San Francisco, California"
  },
  {
    "Symbol": "UBER",
    "Security": "Uber Technologies",
    "GICS Sector": "Industrials",
    "GICS Sub-Industry": "Road & Rail",
    "Founded": 2009,
    "Headquarters Location": "San Francisco, California"
  },
  {
    "Symbol": "COIN",
    "Security": "Coinbase",
    "GICS Sector": "Financials",
    "GICS Sub-Industry": "Capital Markets",
    "Founded": 2012,
    "Headquarters Location": "Remote"
  },
  {
    "Symbol": "PLTR",
    "Security": "Palantir Technologies",
    "GICS Sector": "Information Technology",
    "GICS Sub-Industry": "Software",
    "Founded": 2003,
    "Headquarters Location": "Denver, Colorado"
  },
  {
    "Symbol": "GME",
    "Security": "GameStop",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Retail",
    "Founded": 1984,
    "Headquarters Location": "Grapevine, Texas"
  },
  {
    "Symbol": "GME",
    "Security": "GameStop",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Retail",
    "Founded": 1984,
    "Headquarters Location": "Grapevine, Texas"
  },
  {
    "Symbol": "AEO",
    "Security": "American Eagle",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Retail",
    "Founded": 1977,
    "Headquarters Location": "Pittsburgh, Pennsylvania"
  },
  {
    "Symbol": "DKS",
    "Security": "Dick's Sporting Goods",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Specialty Retail",
    "Founded": 1948,
    "Headquarters Location": "Caraopolis, Pennsylvania"
  },
  {
    "Symbol": "DASH",
    "Security": "DoorDash",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Internet & Direct Marketing Retail",
    "Founded": 2013,
    "Headquarters Location": "San Francisco, California"
  },
  {
    "Symbol": "LEVI",
    "Security": "Levi Strauss & Co (Levi's)",
    "GICS Sector": "Consumer Discretionary",
    "GICS Sub-Industry": "Textiles, Apparel & Luxury Goods",
    "Founded": 1853,
    "Headquarters Location": "San Francisco, California"
  }

 
]
export default stocks