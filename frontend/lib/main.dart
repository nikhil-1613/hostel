import 'package:flutter/material.dart';
import 'package:host/providers/BoysRoomsPriovider.dart';
import 'package:host/providers/DetailsProvider.dart';
import 'package:host/providers/GirlsFloorsProvider.dart';
import 'package:host/providers/GirlsRoomsProvider.dart';
import 'package:host/providers/verifyProvider.dart';
import 'package:host/screens/InstructionsScreen.dart';
import 'package:provider/provider.dart';

void main() {
  runApp(MultiProvider(
    providers: [
      ChangeNotifierProvider(create: (_) => GirlsFloorsProvider()),
      ChangeNotifierProvider(create: (_) => GirlsRoomProvider()),
      ChangeNotifierProvider(create: (_) => DetailsProvider()),
      ChangeNotifierProvider(create: (_) => BoysRoomProvider()),
      ChangeNotifierProvider(create: (_) => VerifyProvider()),
    ],
    child: MyApp(),
  ));
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      theme: ThemeData(useMaterial3: true),
      debugShowCheckedModeBanner: false,
      home: InstructionScreen(),
    );
  }
}
