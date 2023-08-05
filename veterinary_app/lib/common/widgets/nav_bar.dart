import 'package:flutter/material.dart';
import '../../user_features/contacts/contact_page.dart';
import '../../user_features/events/events_page.dart';
import '../../user_features/faq/faq_page.dart';
import '../../user_features/feedback/feedback_page.dart';
import '../../user_features/home/home_page.dart';
import '../../utils/global_variables.dart';

class NavBarDrawer extends StatelessWidget {
  const NavBarDrawer({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      margin: const EdgeInsets.only(top: 110),
      child: Drawer(
        shadowColor: Colors.white,
        shape: const RoundedRectangleBorder(borderRadius: BorderRadius.only(topRight: Radius.circular(70))),
        width: 200,
        backgroundColor: loginColor,
        child: ListView(children: [
          DrawerHeader(
            child: Container(
            margin:const EdgeInsets.only(top: 45, bottom: 45, left: 10, right: 10),
            decoration: BoxDecoration(
                borderRadius: BorderRadius.circular(18), color: Colors.grey[300]),
            child: const Center(child: Text('Side Menu',style: TextStyle(color: Color.fromRGBO(55, 65, 81, 1),fontWeight: FontWeight.w900),)),
                    )),
          ListTile(
            title: const Text('Home',
                style: TextStyle(color: Colors.white, fontSize: 17)),
            onTap: () {
              Navigator.pushNamedAndRemoveUntil(
                  context, HomePage.routeName, (route) => false);
            },
          ),
          ListTile(
            title: const Text(
              'Ug Library',
              style: TextStyle(color: Colors.white, fontSize: 17),
            ),
            onTap: () {},
          ),
          ListTile(
            title: const Text('History',
                style: TextStyle(color: Colors.white, fontSize: 17)),
            onTap: () {},
          ),
          ListTile(
            title: const Text('Contacts',
                style: TextStyle(color: Colors.white, fontSize: 17)),
            onTap: () {
              Navigator.pushNamedAndRemoveUntil(
                  context, ContactPage.routeName, (route) => false);
            },
          ),
          ListTile(
            title: const Text('FAQ',
                style: TextStyle(color: Colors.white, fontSize: 17)),
            onTap: () {
              Navigator.pushNamedAndRemoveUntil(context, FAQPage.routeName, (route) => false);
            },
          ),
          ListTile(
            title: const Text('Events',
                style: TextStyle(color: Colors.white, fontSize: 17)),
            onTap: () {
              Navigator.pushNamedAndRemoveUntil(
                  context, EventsPage.routeName, (route) => false);
            },
          ),
          ListTile(
            title: const Text('FeedBack',
                style: TextStyle(color: Colors.white, fontSize: 17)),
            onTap: () {
              Navigator.pushNamedAndRemoveUntil(context,FeedBackPage.routeName , (route) => false);
            },
          ),
        ]),
      ),
    );
  }
}
