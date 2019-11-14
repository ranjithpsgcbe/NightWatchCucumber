Feature: BGP Eligible Criteria

  Scenario: AC1-1
    Given User navigate to BGP Page
    Then I click on the BGP User ID
    When I click on the login button
    Then I click on the grand new button
    Then I click on the building & construction button
    Then I click on the select grand button
    Then I click on the devlop grand button
    Then I click on the apply button
    Then I click on the proceed button
    Then I click on the eligible criteria
    Then verify the Next button and side menu should disable

  Scenario: AC1-2
    Given user click on the  Yes button eligible critiria
    Then NEXT button should enable
    And Side Menu should enable

  Scenario: AC1-3
    Given user click on the  No button eligible critiria
    Then I should see triggers warning message

  Scenario: AC1-4
    Given User click on the smart Advisor link should navigate
