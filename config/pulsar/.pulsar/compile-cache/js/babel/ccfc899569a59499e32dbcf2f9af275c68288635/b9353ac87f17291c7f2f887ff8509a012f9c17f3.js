"use strict";

/** @babel */

const dalek = require('./dalek');
const Grim = require('grim');
module.exports = {
  activate() {
    atom.packages.onDidActivateInitialPackages(async () => {
      const duplicates = await dalek.enumerate();
      for (let i = 0; i < duplicates.length; i++) {
        const duplicate = duplicates[i];
        Grim.deprecate(`You have the core package "${duplicate}" installed as a community package. See https://github.com/pulsar-edit/pulsar/blob/master/packages/dalek/README.md for how this causes problems and instructions on how to correct the situation.`, {
          packageName: duplicate
        });
      }
    });
  }
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkYWxlayIsInJlcXVpcmUiLCJHcmltIiwibW9kdWxlIiwiZXhwb3J0cyIsImFjdGl2YXRlIiwiYXRvbSIsInBhY2thZ2VzIiwib25EaWRBY3RpdmF0ZUluaXRpYWxQYWNrYWdlcyIsImR1cGxpY2F0ZXMiLCJlbnVtZXJhdGUiLCJpIiwibGVuZ3RoIiwiZHVwbGljYXRlIiwiZGVwcmVjYXRlIiwicGFja2FnZU5hbWUiXSwic291cmNlcyI6WyJtYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAYmFiZWwgKi9cblxuY29uc3QgZGFsZWsgPSByZXF1aXJlKCcuL2RhbGVrJyk7XG5jb25zdCBHcmltID0gcmVxdWlyZSgnZ3JpbScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYWN0aXZhdGUoKSB7XG4gICAgYXRvbS5wYWNrYWdlcy5vbkRpZEFjdGl2YXRlSW5pdGlhbFBhY2thZ2VzKGFzeW5jICgpID0+IHtcbiAgICAgIGNvbnN0IGR1cGxpY2F0ZXMgPSBhd2FpdCBkYWxlay5lbnVtZXJhdGUoKTtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZHVwbGljYXRlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBkdXBsaWNhdGUgPSBkdXBsaWNhdGVzW2ldO1xuICAgICAgICBHcmltLmRlcHJlY2F0ZShcbiAgICAgICAgICBgWW91IGhhdmUgdGhlIGNvcmUgcGFja2FnZSBcIiR7ZHVwbGljYXRlfVwiIGluc3RhbGxlZCBhcyBhIGNvbW11bml0eSBwYWNrYWdlLiBTZWUgaHR0cHM6Ly9naXRodWIuY29tL3B1bHNhci1lZGl0L3B1bHNhci9ibG9iL21hc3Rlci9wYWNrYWdlcy9kYWxlay9SRUFETUUubWQgZm9yIGhvdyB0aGlzIGNhdXNlcyBwcm9ibGVtcyBhbmQgaW5zdHJ1Y3Rpb25zIG9uIGhvdyB0byBjb3JyZWN0IHRoZSBzaXR1YXRpb24uYCxcbiAgICAgICAgICB7IHBhY2thZ2VOYW1lOiBkdXBsaWNhdGUgfVxuICAgICAgICApO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLE1BQU1BLEtBQUssR0FBR0MsT0FBTyxDQUFDLFNBQVMsQ0FBQztBQUNoQyxNQUFNQyxJQUFJLEdBQUdELE9BQU8sQ0FBQyxNQUFNLENBQUM7QUFFNUJFLE1BQU0sQ0FBQ0MsT0FBTyxHQUFHO0VBQ2ZDLFFBQVEsR0FBRztJQUNUQyxJQUFJLENBQUNDLFFBQVEsQ0FBQ0MsNEJBQTRCLENBQUMsWUFBWTtNQUNyRCxNQUFNQyxVQUFVLEdBQUcsTUFBTVQsS0FBSyxDQUFDVSxTQUFTLEVBQUU7TUFDMUMsS0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLEdBQUdGLFVBQVUsQ0FBQ0csTUFBTSxFQUFFRCxDQUFDLEVBQUUsRUFBRTtRQUMxQyxNQUFNRSxTQUFTLEdBQUdKLFVBQVUsQ0FBQ0UsQ0FBQyxDQUFDO1FBQy9CVCxJQUFJLENBQUNZLFNBQVMsQ0FDWCw4QkFBNkJELFNBQVUsbU1BQWtNLEVBQzFPO1VBQUVFLFdBQVcsRUFBRUY7UUFBVSxDQUFDLENBQzNCO01BQ0g7SUFDRixDQUFDLENBQUM7RUFDSjtBQUNGLENBQUMifQ==