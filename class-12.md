# LOCAL STORAGE 

## html storage 

the html storage is a specification named web storage and it’s a way for web pages to store named key/value pairs locally, within the client web browser. Like cookies, this data persists even after you navigate away from the web site, close your browser tab, exit your browser, or what have you

You store data based on a named key, then you can retrieve that data with the same key. however the data is actually stored as a string. if you are storing and retrieving anything than string we need to use functions like parseInt or parseFloat, There are also methods for removing the value for a given named key, and clearing the entire storage area like interface storage then delete void removeItem

### TRACKING CHANGES TO THE HTML5 STORAGE AREA

we can trapthe storage event. the storage event is fired on the window object  whenever setItem(), removeItem(), or clear() is called 

### BEYOND NAMED KEY-VALUE PAIRS: COMPETING VISIONS

 the present condition of HTML5 Storage is surprisingly rosy. A new API has been standardized and implemented across all major browsers, platforms, and devices. 
 This specification has reached an impasse: all interested implementors have used the same SQL backend (Sqlite), but we need multiple independent implementations to proceed along a standardisation path

