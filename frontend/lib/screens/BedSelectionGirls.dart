// import 'package:flutter/material.dart';

// import 'package:host/screens/FiveBeds.dart';
// import 'package:host/screens/SixBeds.dart'; // Assuming SixBeds.dart is also created

// class BedSelectionGirls extends StatefulWidget {
//   final int roomNumber;
//   final int floorNumber;

//   const BedSelectionGirls({
//     super.key,
//     required this.roomNumber,
//     required this.floorNumber,
//   });

//   @override
//   State<BedSelectionGirls> createState() => _BedSelectionGirlsState();
// }

// class _BedSelectionGirlsState extends State<BedSelectionGirls> {
//   int selectedBed = -1; // Track selected bed number

//   @override
//   void initState() {
//     super.initState();
//     print('Room number: ${widget.roomNumber}');
//     print('Floor number: ${widget.floorNumber}');
//   }

//   @override
//   Widget build(BuildContext context) {
//     return Scaffold(
//       appBar: AppBar(
//         title: Text('Bed Selection'),
//       ),
//       body: SingleChildScrollView(
//         child: _buildBedSelection(context, widget.roomNumber),
//       ),
//     );
//   }

//   Widget _buildBedSelection(BuildContext context, int roomNumber) {
//     if ([21, 121, 221, 321, 421].contains(roomNumber)) {
//       Navigator.push(
//         context,
//         MaterialPageRoute(
//           builder: (context) => SixBeds(
//             roomNumber: roomNumber,
//             floorNumber: widget.floorNumber,
//           ),
//         ),
//       );
//     } else {
//       Navigator.push(
//         context,
//         MaterialPageRoute(
//           builder: (context) => FiveBeds(
//             roomNumber: roomNumber,
//             floorNumber: widget.floorNumber,
//           ),
//         ),
//       );
//     }
//     return Container();
//   }
// }
// // import 'package:flutter/material.dart';
// // import 'package:host/screens/BookingDetails.dart';
// // //import 'package:host/screens/FiveBeds.dart'; // Assuming this is the path to your FiveBeds.dart file

// // class BedSelectionGirls extends StatefulWidget {
// //   final int roomNumber;
// //   final int floorNumber;

// //   const BedSelectionGirls({
// //     super.key,
// //     required this.roomNumber,
// //     required this.floorNumber,
// //   });

// //   @override
// //   State<BedSelectionGirls> createState() => _BedSelectionGirlsState();
// // }

// // class _BedSelectionGirlsState extends State<BedSelectionGirls> {
// //   int selectedBed = -1; // Track selected bed number

// //   @override
// //   void initState() {
// //     super.initState();
// //     print('Room number: ${widget.roomNumber}');
// //     print('Floor number: ${widget.floorNumber}');
// //   }

// //   @override
// //   Widget build(BuildContext context) {
// //     return Scaffold(
// //       appBar: AppBar(
// //         title: Text('Bed Selection Girls'),
// //         leading: IconButton(
// //           icon: Icon(Icons.arrow_back),
// //           onPressed: () => Navigator.pop(context),
// //         ),
// //       ),
// //       body: Stack(
// //         // Use Stack to push content down and overlay button
// //         children: [
// //           SingleChildScrollView(
// //             // Ensure content scrolls vertically
// //             child: Container(
// //               padding: const EdgeInsets.all(20.0),
// //               child: Column(
// //                 mainAxisSize: MainAxisSize.min,
// //                 crossAxisAlignment: CrossAxisAlignment.center,
// //                 children: [
// //                   Row(
// //                     mainAxisAlignment: MainAxisAlignment.center,
// //                     children: [
// //                       Text(
// //                         'Room ${widget.roomNumber} Select Your Bed',
// //                         style: TextStyle(
// //                             fontSize: 22.0, fontWeight: FontWeight.bold),
// //                       ),
// //                     ],
// //                   ),
// //                   SizedBox(height: 20.0),
// //                   IntrinsicHeight(
// //                     child: Row(
// //                       mainAxisAlignment: MainAxisAlignment.spaceEvenly,
// //                       children: [
// //                         _buildBedButton(1),
// //                         _buildBedButton(2),
// //                       ],
// //                     ),
// //                   ),
// //                   SizedBox(height: 20.0),
// //                   IntrinsicHeight(
// //                     child: Row(
// //                       mainAxisAlignment: MainAxisAlignment.spaceEvenly,
// //                       children: [
// //                         _buildBedButton(3),
// //                         _buildBedButton(4),
// //                       ],
// //                     ),
// //                   ),
// //                   SizedBox(height: 20.0),
// //                   IntrinsicHeight(
// //                     child: Row(
// //                       mainAxisAlignment: MainAxisAlignment.spaceEvenly,
// //                       children: [
// //                         _buildBedButton(5),
// //                       ],
// //                     ),
// //                   ),
// //                   const SizedBox(
// //                     height: 20.0,
// //                   ),
// //                   Row(
// //                     mainAxisAlignment: MainAxisAlignment.center,
// //                     children: [
// //                       ElevatedButton(
// //                           onPressed: () {
// //                             Navigator.push(
// //                                 context,
// //                                 MaterialPageRoute(
// //                                     builder: (context) => BookingDetails(
// //                                           floorNumber: widget.floorNumber,
// //                                           roomNumber: widget.roomNumber,
// //                                           bedNumber: selectedBed,
// //                                         )));
// //                           },
// //                           child: Text('Confirm Booking'))
// //                     ],
// //                   )
// //                 ],
// //               ),
// //             ),
// //           ),
// //         ],
// //       ),
// //     );
// //   }

// //   Widget _buildBedButton(int bedNumber) {
// //     return TextButton.icon(
// //       icon: Icon(
// //         Icons.king_bed,
// //         size: 42.0,
// //       ),
// //       label: Text(
// //         '$bedNumber',
// //         style: TextStyle(fontSize: 24.0),
// //       ),
// //       onPressed: () => setState(() => selectedBed = bedNumber),
// //       style: TextButton.styleFrom(
// //         foregroundColor: Colors.white,
// //         backgroundColor: selectedBed == bedNumber ? Colors.red : Colors.green,
// //         shape: RoundedRectangleBorder(
// //           borderRadius: BorderRadius.circular(12.0),
// //         ),
// //         minimumSize: Size(120, 80),
// //       ),
// //     );
// //   }

// //   _navigateToBookingDetails() {
// //     Navigator.push(
// //       context,
// //       MaterialPageRoute(
// //         builder: (context) => BookingDetails(
// //           floorNumber: widget.floorNumber,
// //           roomNumber: widget.roomNumber,
// //           bedNumber: selectedBed,
// //         ),
// //       ),
// //     );
// //   }
// // }