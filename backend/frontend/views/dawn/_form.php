<?php

use yii\helpers\Html;
use yii\widgets\ActiveForm;

/** @var yii\web\View $this */
/** @var common\models\Dawn $model */
/** @var yii\widgets\ActiveForm $form */
?>

<div class="dawn-form">

    <?php $form = ActiveForm::begin(); ?>

    <?= $form->field($model, 'downloads')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'users')->textarea(['rows' => 6]) ?>

    <?= $form->field($model, 'newregister')->textarea(['rows' => 6]) ?>

    <div class="form-group">
        <?= Html::submitButton('Save', ['class' => 'btn btn-success']) ?>
    </div>

    <?php ActiveForm::end(); ?>

</div>
