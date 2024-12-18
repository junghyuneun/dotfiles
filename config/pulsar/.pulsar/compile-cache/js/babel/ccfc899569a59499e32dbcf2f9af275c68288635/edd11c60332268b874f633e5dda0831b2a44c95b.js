'use babel';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = toggleClassName;
function toggleClassName(className, mustAddClass) {
  const root = document.documentElement;
  if (mustAddClass) {
    root.classList.add(className);
  } else {
    root.classList.remove(className);
  }
}
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ0b2dnbGVDbGFzc05hbWUiLCJjbGFzc05hbWUiLCJtdXN0QWRkQ2xhc3MiLCJyb290IiwiZG9jdW1lbnQiLCJkb2N1bWVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiXSwic291cmNlcyI6WyJ0b2dnbGUtY2xhc3MtbmFtZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGJhYmVsJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdG9nZ2xlQ2xhc3NOYW1lKGNsYXNzTmFtZSwgbXVzdEFkZENsYXNzKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgIGlmIChtdXN0QWRkQ2xhc3MpIHtcbiAgICAgICAgcm9vdC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcm9vdC5jbGFzc0xpc3QucmVtb3ZlKGNsYXNzTmFtZSk7XG4gICAgfVxufVxuIl0sIm1hcHBpbmdzIjoiQUFBQSxXQUFXOztBQUFDO0VBQUE7QUFBQTtBQUFBO0FBRUcsU0FBU0EsZUFBZSxDQUFDQyxTQUFTLEVBQUVDLFlBQVksRUFBRTtFQUM3RCxNQUFNQyxJQUFJLEdBQUdDLFFBQVEsQ0FBQ0MsZUFBZTtFQUVyQyxJQUFJSCxZQUFZLEVBQUU7SUFDZEMsSUFBSSxDQUFDRyxTQUFTLENBQUNDLEdBQUcsQ0FBQ04sU0FBUyxDQUFDO0VBQ2pDLENBQUMsTUFBTTtJQUNIRSxJQUFJLENBQUNHLFNBQVMsQ0FBQ0UsTUFBTSxDQUFDUCxTQUFTLENBQUM7RUFDcEM7QUFDSjtBQUFDIn0=