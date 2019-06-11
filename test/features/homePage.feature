Feature: Local server test
    As a developer
    I want the demo app have the correct title

    Scenario: Signing in
        Given I open the bbc homepage
        When I choose to sign in from the home page
        Then I am taken to the sign in page
