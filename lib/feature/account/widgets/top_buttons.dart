import 'package:amazon_clone/feature/account/widgets/account_button.dart';
import 'package:flutter/material.dart';

class TopButtons extends StatelessWidget {
  const TopButtons({super.key});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Row(
          children: [
            AccountButton(
              text: 'Your Orders',
              onTab: () {},
            ),
            AccountButton(
              text: 'Turn Seller',
              onTab: () {},
            ),
          ],
        ),
        const SizedBox(height: 10),
        Row(
          children: [
            AccountButton(
              text: 'Log Out',
              onTab: () {},
            ),
            AccountButton(
              text: 'Your Wish LIst',
              onTab: () {},
            ),
          ],
        )
      ],
    );
  }
}
