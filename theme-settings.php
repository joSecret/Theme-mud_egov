<?php

/**
 * @file
 * theme-settings.php
 *
 * Provides theme settings for Bootstrap Barrio-based themes.
 */

use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Url;
use Drupal\Core\Link;

/**
 * Implements hook_form_FORM_ID_alter().
 */
function mud_egov_form_system_theme_settings_alter(&$form, FormStateInterface $form_state, $form_id = NULL) {
  // Change collapsible fieldsets (now details) to default #open => FALSE.
  $form['theme_settings']['#open'] = FALSE;

  // Vertical tabs.
  $form['egov'] = [
    '#type' => 'vertical_tabs',
    '#prefix' => '<h2><small>' . t('eGov settings') . '</small></h2>',
    '#weight' => -10,
  ];

  // Layout.
  $form['layout'] = [
    '#type' => 'details',
    '#title' => t('Layout'),
    '#group' => 'egov',
  ];

  // List of regions.
  $theme = \Drupal::theme()->getActiveTheme()->getName();
  $region_list = system_region_list($theme);

  // Region.
  $form['layout']['region'] = [
    '#type' => 'details',
    '#title' => t('Region'),
    '#collapsible' => TRUE,
    '#collapsed' => TRUE,
  ];

  $themeSettings = \Drupal::service('Drupal\Core\Extension\ThemeSettingsProvider');

  foreach ($region_list as $name => $description) {
    $region_wrapper = $themeSettings->getSetting('mud_egov_region_wrapper_' . $name) ?? FALSE;
    $region_no_wrapper = $themeSettings->getSetting('mud_egov_region_no_wrapper_' . $name) ?? FALSE;
    $region_class = $themeSettings->getSetting('mud_egov_region_class_' . $name) ?? NULL;
    $region_bg_class = $themeSettings->getSetting('mud_egov_region_bg_class_' . $name) ?? NULL;

    $form['layout']['region'][$name] = [
      '#type' => 'details',
      '#title' => $description,
      '#collapsible' => TRUE,
      '#collapsed' => TRUE,
    ];

    $no_wrapper_selector = ':input[name="mud_egov_region_no_wrapper_' . $name . '"]';

    $form['layout']['region'][$name]['mud_egov_region_no_wrapper_' . $name] = [
      '#type' => 'checkbox',
      '#title' => t('Remove all wrappers for @description region', ['@description' => $description]),
      '#default_value' => $region_no_wrapper,
    ];

    $form['layout']['region'][$name]['mud_egov_region_wrapper_' . $name] = [
      '#type' => 'checkbox',
      '#title' => t('Add wrapper for @description region', ['@description' => $description]),
      '#default_value' => $region_wrapper,
      '#states' => [
        'invisible' => [$no_wrapper_selector => ['checked' => TRUE]],
      ],
    ];

    $form['layout']['region'][$name]['mud_egov_region_class_' . $name] = [
      '#type' => 'textfield',
      '#title' => t('Classes for @description region', ['@description' => $description]),
      '#default_value' => $region_class,
      '#size' => 40,
      '#maxlength' => 40,
      '#states' => [
        'invisible' => [$no_wrapper_selector => ['checked' => TRUE]],
      ],
    ];

    $form['layout']['region'][$name]['mud_egov_region_bg_class_' . $name] = [
      '#type' => 'select',
      '#title' => t('Background for @description region', ['@description' => $description]),
      '#default_value' => $region_bg_class,
      '#options' => [
        '' => t('- None -'),
        'bg-light' => t('Light'),
        'bg-dark' => t('Dark'),
        'bg-brand' => t('Brand'),
      ],
      '#states' => [
        'invisible' => [$no_wrapper_selector => ['checked' => TRUE]],
      ],
    ];
  }
}
